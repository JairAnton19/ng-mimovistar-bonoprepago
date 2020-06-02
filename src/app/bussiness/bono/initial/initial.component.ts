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
  styleUrls: ['./initial.component.scss']
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

    console.log(this.bonoSelected)

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
          console.log(body);
          console.log(response);
          if (response.responseCode === '0') {
            this.cargando = false;
            this.router.navigate(['/canje']);
          } else {
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

    const getParams = this.globalService.getParams(['jwt']);
    console.log('Hola mundo');
    if (getParams.value) {
      this.globalService.getUrlNovum(getParams.response.params.jwt);
      const body = {
        encryptedToken: getParams.response.params.jwt
      };
      await this.globalService.globlalPost(`${CONSTANTS.endPointBonosHome}`, body).subscribe(
        async (response: any) => {
          console.log(response);
          sessionStorage.setItem('urlCallBack', response.responseData.callbackURL);
          // this.globalService.setToken(getParams.response.params.jwt);
          await this.validation(response);

          this.cargando = false;
          console.log('Se guardo la posicion ' + this.posicion);
          console.log('Cargando false');
        },
        (error: any) => {
          console.log(error);
          this.router.navigate(['/notFound'], { replaceUrl: true });
          console.log(body);
        }
      );
    } else {
      this.router.navigate(['/notFound'], { replaceUrl: true });
    }
  }

  async validation(response: any) {
    const getParams = this.globalService.getParams(['jwt']);
    if (response.responseCode === '0') {
      // SETEAMOS VALORES
      // this.phone = response.responseData.phone;
      if (response.responseData.bonoList.length > 0) {
        this.globalService.setToken(getParams.response.params.jwt);
        sessionStorage.setItem('phone', response.responseData.phone);
        this.subscriberId = response.responseData.subscriberId;
        response.responseData.bonoList.forEach((element) => {
          this.listOfBonos.push({
            bonoId: element.id,
            bonoPrepago: element.description,
            type: element.type,
            selected: element.selected,
            subscriberId: response.responseData.subscriberId,
            trackingCD: element.responseTrackingCD
          });
        });
      }  else {
        return this.router.navigate(['/bono-empty'], { replaceUrl: true });
      }
    } else if (response.responseCode === '2') {
      console.log('BONOEMPTY');
      this.globalService.setToken(getParams.response.params.jwt);
      sessionStorage.setItem('phone', response.responseData.phone);
      console.log(response.responseData.phone);
      return this.router.navigate(['/bono-empty'], { replaceUrl: true });
    } else {
     return this.router.navigate(['/bono-inital'], { replaceUrl: true });
    }
  }

}
