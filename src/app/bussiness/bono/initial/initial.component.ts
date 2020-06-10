import { isNullOrUndefined } from 'util';
import { HttpHeaders } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { GlobalService } from '../../../commons/services/global.service';
import { DetectedPlatform } from '../../../commons/services/detectedPlatform';
import { Bono } from '../../../commons/models/bono.model';
import { Component, OnInit } from '@angular/core';
import { BonoService } from 'src/app/commons/services/bono.service';
import { Router } from '@angular/router';
import { CONSTANTS } from '../../../commons/constants/constants';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss'],
})
export class InitialComponent implements OnInit {

  slides = [];
  cargando = true;
  posicion: number = null;
  listPrices: any[] = [];
  platform = null;
  checked: boolean;
  bonoSelected: Bono = new Bono();
  // listOfBonos: any[] = [
  //   { bonoPrepago: 'Llamadas ilimitadas a todo <span class="labelNegrita">Movistar</span> por 1 día', type: 'call', selected: false },
  //   { bonoPrepago: '<span class="labelNegrita">500 MB</span> por 1 día', type: 'internet', selected: false },
  // ];
  listOfBonos: any[] = [];
  listOfBonosPostpagoHogar: any[] = [];
  subscriberIdPostpagoHogar: any;
  subscriberId: any;

  constructor(
    private bonoService: BonoService,
    private route: Router,
    private detectedPlatform: DetectedPlatform,
    private globalService: GlobalService,
    private router: Router
  ) {
  }

  async ngOnInit() {

    this.platform = this.detectedPlatform.detectPlatform();
    await this.peticionPost();
  }

  public selectedBono(index: number) {

    this.checked = true;
    this.bonoSelected.name = this.listOfBonos[index].bonoPrepago;
    this.bonoSelected.type = this.listOfBonos[index].type;
    this.bonoSelected.id = this.listOfBonos[index].bonoId;
    this.bonoSelected.subscriberId = this.listOfBonos[index].subscriberId;
    this.bonoSelected.trackingCD = this.listOfBonos[index].trackingCD;

    for (let i = 0; i < this.listOfBonos.length; i++) {
      if (i === index) {
        this.listOfBonos[index].selected = true;
      } else {
        this.listOfBonos[i].selected = false;
      }
    }

    return ({ checked: this.checked, name: this.bonoSelected.name, type: this.bonoSelected.type });
  }

  // change button clases
  public buttonClases(valor: boolean) {
    if (valor) {
      return ['tdp-button', this.platform === 'ios' ? 'fontIos' : 'fontAndroid'];
    } else {
      return ['tdp-button-opaque', this.platform === 'ios' ? 'fontIos' : 'fontAndroid'];
    }
  }

  // Set data of bonus selected
  public sendData(valor: boolean): void {
    if (valor) {
      this.bonoService.setBono(this.bonoSelected);
      this.cargando = true;

      const body = {
        bonoId: this.bonoSelected.id,
        subscriberId: this.bonoSelected.subscriberId,
        descripcion: this.bonoSelected.name,
        responseTrackingCD: this.bonoSelected.trackingCD,
      };

      this.globalService.globlalPost(`${CONSTANTS.endPointCanjearBono}`, body).subscribe(
        async (response: any) => {
          if (response.responseCode === '0') {
            this.cargando = false;
            this.router.navigate(['/canje']);
          }
          else {
            this.router.navigate(['/notFound'], { replaceUrl: true });
          }
        });
    }
  }

  public linkRouter(ruta: string) {
    this.route.navigate([ruta]);
    return true;
  }

  async peticionPost() {
    const getParams = this.globalService.getParams(['jwt'])

    if (getParams.value) {
      this.globalService.getUrlNovum(getParams.response.params.jwt)
      const urlJwt = window.location.href
      this.globalService.setUrlJwt(urlJwt)

      const body = {
        encryptedToken: getParams.response.params.jwt
      }

      await this.globalService.globlalPost(`${CONSTANTS.endPointBonosHome}`, body).subscribe(
        async (response: any) => {
          sessionStorage.setItem('urlCallBack', response.responseData.callbackURL)

          if(!isNullOrUndefined(response.responseData.lineType)){
            let lineType = response.responseData.lineType.toUpperCase()

            if(lineType === 'PREPAID'){ // continue prepaid flow
              await this.validation(response)
              this.cargando = false
            }
            else if(lineType === 'POSTPAID' || lineType === 'CONTROL' || lineType === 'HOGAR'){ //continue postpaid and hogar
              await this.validatePostpagoHogar(response)
              this.cargando = false
            }
            else { // line type not found
              this.router.navigate(['/notFound'], { replaceUrl: true });
            }
          }
          else {
            this.router.navigate(['/notFound'], { replaceUrl: true });
          }
        },
        (error: any) => {
          this.router.navigate(['/notFound'], { replaceUrl: true });
        }
      )
    } else {
      this.router.navigate(['/notFound'], { replaceUrl: true });
    }
  }



  async validatePostpagoHogar(response: any){
    if(response.responseCode === '0'){
      if(response.responseData.bonoList.length > 0){
        this.subscriberIdPostpagoHogar = response.responseData.subscriberId;
        await response.responseData.bonoList.forEach((element) => {
          this.listOfBonosPostpagoHogar.push({
            bonoId: element.id,
            phone: element.phone,
            description: element.description,
            detail: element.detail,
            type: element.type,
            selected: element.selected,
            subscriberId: response.responseData.subscriberId,
            trackingCD: element.responseTrackingCD,
            lineType: response.responseData.lineType
          });
        });

        this.globalService.setBonoListPostpagoHogar(this.listOfBonosPostpagoHogar)
        return this.router.navigate(['/bono-inital'], {replaceUrl: true})
      }
      else {
        return this.router.navigate(['/bono-end'], { replaceUrl: true });
      }
    }
    else if (response.responseCode === '1280') {/*No bono*/
      console.log('No corresponde campaña');
      return this.router.navigate(['/no-bono'], { replaceUrl: true });
    }
    else if (response.responseCode === '1209') {/*Vacio*/
      console.log('El cliente no tiene campañas activas');
      return this.router.navigate(['/bono-end'], { replaceUrl: true });
    }
    else if (response.responseCode === '1284') {/*Deuda*/
      console.log('No aplica por deuda vencida pendiente');
      return this.router.navigate(['/bono-debt'], { replaceUrl: true });
    }
    else if (response.responseCode === '1281') {/*Max-Bono*/
      console.log('Producto con velocidad > 200mb');
      return this.router.navigate(['/bono-max'], { replaceUrl: true });
    }
    else if (response.responseCode === '1282') {/*facilidades tecnnicas*/
      console.log('No corresponde por facilidad tecnica');
      return this.router.navigate(['/bono-technical'], { replaceUrl: true });
    }
    else if (response.responseCode === '1283') {/*Con Bono*/
      console.log('Ya cuenta con el beneficio');
      return this.router.navigate(['/bono-canjed'], { replaceUrl: true });
    }
    else {
      return this.router.navigate(['/bono-error'], { replaceUrl: true });
    }
  }

  async validation(response: any) {
    const getParams = this.globalService.getParams(['jwt']);
    if (response.responseCode === '0')
    {
      if (response.responseData.bonoList.length > 0)
      {
        this.globalService.setToken(getParams.response.params.jwt)
        sessionStorage.setItem('phone', response.responseData.phone)
        this.subscriberId = response.responseData.subscriberId

        response.responseData.bonoList.forEach((element) => {
          this.listOfBonos.push({
            bonoId: element.id,
            bonoPrepago: element.description,
            type: element.type,
            selected: element.selected,
            subscriberId: response.responseData.subscriberId,
            trackingCD: element.responseTrackingCD,
            lineType: response.responseData.lineType
          });
        });
      }
      else {
        return this.router.navigate(['/bono-empty'], { replaceUrl: true });
      }
    }
    else if (response.responseCode === '2') {
      console.log('BONOEMPTY');
      this.globalService.setToken(getParams.response.params.jwt);
      sessionStorage.setItem('phone', response.responseData.phone);
      console.log(response.responseData.phone);
      return this.router.navigate(['/bono-empty'], { replaceUrl: true });
    }
    else {
     return this.router.navigate(['/notFound'], { replaceUrl: true });
    }
  }

}
