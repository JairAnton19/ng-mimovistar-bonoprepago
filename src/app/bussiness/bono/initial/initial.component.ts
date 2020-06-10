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
    //await this.callbackToken()
    await this.peticionPost();
  }

  /*async callbackToken(){
    const myHeaders = {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      "Cookie": "buid=AQABAAEAAAAm-06blBE1TpVMil8KPQ41SwZ0MSw9gv-YMgNfgO7PHjnkyIceJZA_xJTTqakZIGFe_f0aBXulJAKkxPoDHwFab4ciE07AzyiTjeBEMwxVuwwijdvCGMm6BwJJULPIlDkgAA; esctx=AQABAAAAAAAm-06blBE1TpVMil8KPQ41KktrSTWuBFCXZ0Ij6HYPoDJ3C5QcJ0rQBQO5WrUTVemiApmoKRapUH18Dz2k_YKxvBR_DoN1iMahpN3Cq3wTKsB9VRdPPVr824KRD5tEtFeWebgRL8K_cusBQMR6uk-nO32MDm3wTAilo-D4uCcTA9O-P48vM1yZEgOEmXqmke0gAA; x-ms-gateway-slice=prod; stsservicecookie=ests; fpc=At2_T9Oe0dFPpg51EndsXyR4o6DGAQAAADdjbNYOAAAA",
      'Access-Control-Allow-Origin':'*'
    }

    const params = {
      "client_id": "c7476004-2000-4af0-adb9-f2a213eb171a",
      "resource": "67e5ec01-6a13-4166-964a-87ce5bf10077",
      "redirect_uri": "https://apimngr-genesis-dev.portal.azure-api.net/docs/services/integrationoauth/console/oauth2/authorizationcode/callback",
      "grant_type": "refresh_token",
      "client_secret": "[0xY7xa2B?FULfcH8sHpS]qu/[QFYRdc",
      "refresh_token": "AQABAAAAAABeAFzDwllzTYGDLh_qYbH8e3GVhVd5mBxyMUXE_2r87Kye25is45PfPvhobnvcxf64HKQHTZcZhXd2wdqAq4Yhae8KWlDB7fGIJepDH-NmshnlGsG0ctqN5G-zm3ptbu8gTsyF2889O4BDLjiJyEwgV8kf_b_lBJz0na228-GUDOMYbtw4hhm3DdYdb5nwbzbMje-EBgcwbGn0cpOKtrU6kHNF4ct0MEW6TDfS7uwDUm_XrJCy-zgfhImaEsPnxCu3sM922u1hwwq7dXoRMhe9zTNQRauTg8_8GqefauOASy_n3ac_7RMiE1NNRLxzE4gQLjLnm-FsU_f-W3QZ-KRspO39022DUNsf8e0--vrOaQLd9rweB3bVhM0qaJoLhHRlu-ZfY-EOyTP_SI7H1k9KzY1W9R1JrAL3lV0mQNbH4mPDffxqXJyacnSCe-QcQ5F9dvxkPoJCmK7ndXM3jHl318IxANTT4V7eBoC0-v_y8d5AeRBk8H6rrcM_YsHHqSONppoPxUotfQTT_kFOE7aReTZ5t94xhM93EGzvyYskmAqw5OHWOmFEBEKJzogkzsAyT3ErsUrW8G3qxBh9BlnDKSLtSUcY0yh3iw2-XhN3DIRPYI-1hq-0zjkKGrG_umGQeChGrH9hBzo3aL3OmPlPBf0km30jutEGEvZrN7YLt3Xvg5RgipyBMpRCpJWaoHvGqXpnQzNpQkXj8ne7dBo07xn2DbP9TV0HjenyGrDe5cBOwg0Q1mw3hRfqGF86GbhZM-2A59-56oz5PtFfp_upyed20-3yW0ocfhPN1ncNkxDc-U8N_OZ3txEitEgBX4t9HbWfwoXpiY0DRU-wGYRZwjBiK99KSF44X361-IVBJ7d1B9gkSOdy12sFX-q_mTjcRKMB1rTMo8F4UgaervGGq4pn7EGscMgTWhCFumv0xUt_ZzYux3qvgnCepgqRg-wT6Gqmefl5jw-kCDnMIiumq-_E5ribzIipTBZlGc7AheeuKV9cv9kjMg3SFeI_g82jb8V6MDXX-0TstW22IqcW4OAJhAIEu6EEL3_q7nS07vkjpiVxoBIyDSm0d-rA5mZRwnErp61xi2vXJKAz4asuKWqtDIo4-DrW8NtaC25V0SAA"
    }


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: qs.stringify(params)
    };
    console.log('requestOptions')
    console.log(qs.stringify(params))

    const response = fetch("https://login.microsoftonline.com/929616ff-818c-4541-b071-2bd6ab912e88/oauth2/token", requestOptions)
    const data = await (await response).json()

    console.log('data')
    console.log(data)

    /*
    this.globalService.globalPostToken(CONSTANTS.endPointToken, body).subscribe(
      async(response: any) => {
        console.log('response')
        console.log(response)
      },
      (error: any) => {
        console.log('error')
        console.log(error)
      }
    )

  }*/


  public selectedBono(index: number) {

    this.checked = true;
    this.bonoSelected.name = this.listOfBonos[index].bonoPrepago;
    this.bonoSelected.type = this.listOfBonos[index].type;
    this.bonoSelected.id = this.listOfBonos[index].bonoId;
    this.bonoSelected.subscriberId = this.listOfBonos[index].subscriberId;
    this.bonoSelected.trackingCD = this.listOfBonos[index].trackingCD;

    console.log(this.bonoSelected);

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

  /*async validateTypeLine(){
    const getParams = this.globalService.getParams(['jwt']);

    if (getParams.value) {
      var jwtParams = this.globalService.getUrlNovum(getParams.response.params.jwt);

      if(jwtParams){
        var paramsToken = this.globalService.decodeToken(getParams.response.params.jwt);

        if(paramsToken.payload &&
          paramsToken.payload.line_type &&
          (paramsToken.payload.line_type.toUpperCase() === 'POSTPAGO' || paramsToken.payload.line_type.toUpperCase() === 'HOGAR')){

          const bodyRequest = {};*/

          /*await this.globalService.globlalPost(`${CONSTANTS.retrieveAvailablePromotions}`, bodyRequest).subscribe(
            async(response: any) => {
              await this.validatePostpagoHogar(response)
            },
            (error: any) => {
              this.router.navigate(['/notFound'], { replaceUrl: true });
            }
          )*/

         /* const response = {
            responseCode:"1280",
            responseMessage:"Transacción realizada con Éxito",
            responseData:{
               phone:"eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJOb3Z1bSBCb25vIFByZXBhZ28iLCJpYXQiOjE1OTExMjIxNTYsInN1YiI6IkVuY3J5cHRpbmcgZGF0YSIsImlzcyI6Ik5vdnVtIFdlYiBJZCIsInBob25lIjoiOTIwNzk1MzM2IiwiZXhwIjoxNTkxMTI1NzU2fQ.Qtt8_WnWMrHeoq_hJqazpIIUlAex1ITlcVcONy4qLus",
               subscriberId:"eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJOb3Z1bSBCb25vIFByZXBhZ28iLCJpYXQiOjE1OTExMjIxNTksInN1YiI6IkVuY3J5cHRpbmcgZGF0YSIsImlzcyI6Ik5vdnVtIFdlYiBJZCIsInN1YnNjcmliZXJJZCI6IjE0MDg0NjgyNCIsImV4cCI6MTU5MTEyNTc1OX0.EBK2xZV80Cqms4wL1ZX-xqNl3FhR_pbDDIKLPpJJaVo",
               callbackURL:"https://novum.com/endtest?state=2",
               webID:"service_redemption_prepay",
               nonce:"4zg86i83-7063-4799-9f9-4d968f79bfj99",
               lineType:"prepago",
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
  }*/

  async validatePostpagoHogar(response: any, line_type: any){
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
            lineType: line_type ? line_type : ''
          });
        });

        this.globalService.setBonoListPostpagoHogar(this.listOfBonosPostpagoHogar)
        return this.router.navigate(['/bono-inital'], {replaceUrl: true})
      }
      else {
        return this.router.navigate(['/bono-end'], { replaceUrl: true });
      }
    }else if (response.responseCode === '1280') {/*No bono*/
      console.log('No corresponde campaña');
      return this.router.navigate(['/no-bono'], { replaceUrl: true });
    }else if (response.responseCode === '1209') {/*Vacio*/
      console.log('El cliente no tiene campañas activas');
      return this.router.navigate(['/bono-end'], { replaceUrl: true });
    }else if (response.responseCode === '1284') {/*Deuda*/
      console.log('No aplica por deuda vencida pendiente');
      return this.router.navigate(['/bono-debt'], { replaceUrl: true });
    }else if (response.responseCode === '1281') {/*Max-Bono*/
      console.log('Producto con velocidad > 200mb');
      return this.router.navigate(['/bono-max'], { replaceUrl: true });
    }else if (response.responseCode === '1282') {/*facilidades tecnnicas*/
      console.log('No corresponde por facilidad tecnica');
      return this.router.navigate(['/bono-technical'], { replaceUrl: true });
    }else if (response.responseCode === '1283') {/*Con Bono*/
      console.log('Ya cuenta con el beneficio');
      return this.router.navigate(['/bono-canjed'], { replaceUrl: true });
    }else {
      return this.router.navigate(['/bono-error'], { replaceUrl: true });
    }
  }


  async peticionPost() {
    const getParams = this.globalService.getParams(['jwt']);
    if (getParams.value) {
      this.globalService.getUrlNovum(getParams.response.params.jwt);
      const urlJwt = window.location.href
      this.globalService.setUrlJwt(urlJwt)

      const body = {
        encryptedToken: getParams.response.params.jwt
      };
      console.log('body')
      console.log(body)
      await this.globalService.globlalPost(`${CONSTANTS.endPointBonosHome}`, body).subscribe(
        async (response: any) =>
        {
          console.log('response')
          console.log(response)
        },
        (error: any) => {
          console.log('error');
          console.log(error);
          //this.router.navigate(['/notFound'], { replaceUrl: true });
        }
      )
      /*
       // this.globalService.setToken(getParams.response.params.jwt);
       sessionStorage.setItem('urlCallBack', response.responseData.callbackURL);
       if(response.responseData.lineType === 'postpago' || response.responseData.lineType === 'hogar'){
        await this.validatePostpagoHogar(response, response.responseData.lineType);
        this.cargando = false;
      }else{
        await this.validation(response);
      }
      this.cargando = false;
      console.log('Se guardo la posicion ' + this.posicion);
      console.log('Cargando false');*/

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
