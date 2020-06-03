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

    await this.validateTypeLine();
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

  async validateTypeLine(){
    const getParams = this.globalService.getParams(['jwt']);

    if (getParams.value) {
      var jwtParams = this.globalService.getUrlNovum(getParams.response.params.jwt);

      if(jwtParams){
        var paramsToken = this.globalService.decodeToken(getParams.response.params.jwt);

        if(paramsToken.payload &&
          paramsToken.payload.line_type &&
          (paramsToken.payload.line_type.toUpperCase() === 'POSTPAGO' || paramsToken.payload.line_type.toUpperCase() === 'HOGAR')){

          const bodyRequest = {};

          /*await this.globalService.globlalPost(`${CONSTANTS.retrieveAvailablePromotions}`, bodyRequest).subscribe(
            async(response: any) => {
              await this.validatePostpagoHogar(response)
            },
            (error: any) => {
              this.router.navigate(['/notFound'], { replaceUrl: true });
            }
          )*/

          const response = {
            responseCode:"0",
            responseMessage:"Transacción realizada con Éxito",
            responseData:{
               phone:"eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJOb3Z1bSBCb25vIFByZXBhZ28iLCJpYXQiOjE1OTExMjIxNTYsInN1YiI6IkVuY3J5cHRpbmcgZGF0YSIsImlzcyI6Ik5vdnVtIFdlYiBJZCIsInBob25lIjoiOTIwNzk1MzM2IiwiZXhwIjoxNTkxMTI1NzU2fQ.Qtt8_WnWMrHeoq_hJqazpIIUlAex1ITlcVcONy4qLus",
               subscriberId:"eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJOb3Z1bSBCb25vIFByZXBhZ28iLCJpYXQiOjE1OTExMjIxNTksInN1YiI6IkVuY3J5cHRpbmcgZGF0YSIsImlzcyI6Ik5vdnVtIFdlYiBJZCIsInN1YnNjcmliZXJJZCI6IjE0MDg0NjgyNCIsImV4cCI6MTU5MTEyNTc1OX0.EBK2xZV80Cqms4wL1ZX-xqNl3FhR_pbDDIKLPpJJaVo",
               callbackURL:"https://novum.com/endtest?state=2",
               webID:"service_redemption_prepay",
               nonce:"4zg86i83-7063-4799-9f9-4d968f79bfj99",
               bonoList:[
                  {
                    id:"eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJOb3Z1bSBCb25vIFByZXBhZ28iLCJpYXQiOjE1OTExMjIxNTksInN1YiI6IkVuY3J5cHRpbmcgZGF0YSIsImlzcyI6Ik5vdnVtIFdlYiBJZCIsImJvbm9JRCI6IjIwOTU3NTMiLCJleHAiOjE1OTExMjU3NTl9.V_a486alrtGfpW22aM2IxwcUzTL4TCeibILJmY1uTd8",
                    description:{
                      bonoGB: "20 GB",
                      descriptionBono: "de alta velocidad 4G al mes",
                      timeBono: "por 3 meses",
                      dateBono: "Canjéalo hasta el 31 de Agosto"
                    },
                    type:"PRODUCTOFFERID",
                    selected:false,
                    responseTrackingCD:"1225560401"
                  }
               ]
            }
          }

          await this.validatePostpagoHogar(response, paramsToken.payload.line_type)
        }
        else {
          await this.peticionPost();
        }
      }
    }
    else {
      this.router.navigate(['/notFound'], { replaceUrl: true });
    }
  }

  async validatePostpagoHogar(response: any, line_type: any){
    if(response.responseCode === '0'){
      if(response.responseData.bonoList.length > 0){
        this.subscriberIdPostpagoHogar = response.responseData.subscriberId;
        await response.responseData.bonoList.forEach((element) => {
          this.listOfBonosPostpagoHogar.push({
            bonoId: element.id,
            description: element.description,
            type: element.type,
            selected: element.selected,
            subscriberId: response.responseData.subscriberId,
            trackingCD: element.responseTrackingCD,
            lineType: line_type ? line_type : ''
          });
        });

        this.globalService.setBonoListPostpagoHogar(this.listOfBonosPostpagoHogar)
        return this.router.navigate(['/bono-inital'], {replaceUrl: true})
      }
      else {
        return this.router.navigate(['/bono-canjed'], { replaceUrl: true });
      }
    }
  }


  async peticionPost() {
    const getParams = this.globalService.getParams(['jwt']);

    if (getParams.value) {
      this.globalService.getUrlNovum(getParams.response.params.jwt);

      const body = {
        encryptedToken: getParams.response.params.jwt
      };

      await this.globalService.globlalPost(`${CONSTANTS.endPointBonosHome}`, body).subscribe(
        async (response: any) => {
          sessionStorage.setItem('urlCallBack', response.responseData.callbackURL);
          // this.globalService.setToken(getParams.response.params.jwt);
          await this.validation(response);

          this.cargando = false;
          console.log('Se guardo la posicion ' + this.posicion);
          console.log('Cargando false');
        },
        (error: any) => {
          console.log('error')
          console.log(error);
          this.router.navigate(['/notFound'], { replaceUrl: true });
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
     return this.router.navigate(['/notFound'], { replaceUrl: true });
    }
  }

}
