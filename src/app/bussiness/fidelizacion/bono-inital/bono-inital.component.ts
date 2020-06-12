import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../../commons/services/global.service';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from '../../../commons/constants/constants';


@Component({
  selector: 'app-bono-inital',
  templateUrl: './bono-inital.component.html',
  styleUrls: ['./bono-inital.component.scss'],
})

export class BonoInitalComponent implements OnInit {
  cargando = true;
  platform = null;
  email: string  = null;
  errorMessage = false;
  messageError: string = null;
  messageDivError: string = null;
  bonoLista: any[] = [];
  listOfBonosPostpagoHogar: any[] = [];
  description: string = null;
  bonoGB: string = null;
  phone: string = null;
  subscriberId: string = null;
  bonoId: string = null;
  trackingCD: string = null;
  descriptionBono: string = null;
  timeBono: string = null;
  dateBono: string = null;
  typeBono: string = null;
  originApp: string = null;
  emailField = false;

  constructor(private route: Router, private globalService: GlobalService, private titleService: Title, private router: Router) {

  }

  async ngOnInit(){
    this.listOfBonosPostpagoHogar = this.globalService.getBonoListPostpagoHogar();
    console.log(sessionStorage.getItem('origenAppConst'));
    console.log('listOfBonosPostpagoHogar initial');
    console.log(this.listOfBonosPostpagoHogar);
    await this.loadBono(this.listOfBonosPostpagoHogar);
    this.titleService.setTitle( 'Beneficios Movistar' );
    
  }


  async loadBono(bonoList){
    if(bonoList.length > 0){
      if(bonoList[0].detail !== null ){
      this.bonoGB = bonoList[0].detail.detailQuantity;
      this.descriptionBono = bonoList[0].detail.detailDescription;
      this.timeBono = bonoList[0].detail.detailDuration;
      this.dateBono = bonoList[0].detail.detailExpiration;
      }else{
        this.description = bonoList[0].description;
      }      
      this.typeBono = bonoList[0].lineType;
      this.phone = bonoList[0].phone;
      this.subscriberId = bonoList[0].subscriberId;
      this.bonoId = bonoList[0].bonoId;
      this.trackingCD = bonoList[0].trackingCD;
        
      this.originApp = sessionStorage.getItem('origenAppConst');
      this.phone = sessionStorage.getItem('phone');
      if(bonoList[0].lineType !== undefined || bonoList[0].lineType !== null){
        this.emailField = this.originApp.toUpperCase() === 'APP_NOVUM' ? false : true;
      }
    }
    this.cargando = false;
  }
/*
  ngAfterViewInit() {
    console.log('ngOnInit')
    this.listOfBonosPostpagoHogar = this.childInitial;
    console.log(this.childInitial);
    console.log(this.listOfBonosPostpagoHogar)

  }
*/



  public canjearBono(){
    console.log('entro función canjearbono ' + this.originApp);
    if(this.originApp.toUpperCase() === 'APP_NOVUM'){
      this.cargando = true;
      const body = {
        bonoId: this.bonoId,
        lineType:this.typeBono,
        phone:this.phone,
        descripcion: this.listOfBonosPostpagoHogar[0].description,
        responseTrackingCD: this.trackingCD,
        //email:'vanessa_kq@hotmail.com',
      };
      console.log(body);//this.route.navigate(['/bono-okm']);
      this.globalService.globlalPost(`${CONSTANTS.endPointCanjearBono}`, body).subscribe(
        async (response: any) => {
          if (response.responseCode === '0') {
            this.cargando = false;
            this.route.navigate(['/bono-okm']);
          } else {
            this.cargando = false;
            console.log('Response: '+ response.responseCode);
            this.router.navigate(['/bono-error'], { replaceUrl: true });
          }
        },
        (error: any) => {
          this.cargando = false;
          console.error('Response: '+ error);
          this.router.navigate(['/bono-error'], { replaceUrl: true });
        });
    }else if(this.originApp === 'APP_HOGAR'){
      var emailActual = ((document.getElementById('inputEmail') as HTMLInputElement).value);
      if(this.validateEmail(emailActual)){
        this.errorMessage = false;
        this.cargando = true;
        const body = {
          bonoId: this.bonoId,
          lineType:this.typeBono,
          phone:this.phone,
          descripcion: this.listOfBonosPostpagoHogar[0].description,
          responseTrackingCD: this.trackingCD,
          email: emailActual,
        };
        console.log(body)//;this.route.navigate(['/bono-okh']);
        this.globalService.globlalPost(`${CONSTANTS.endPointCanjearBono}`, body).subscribe(
          async (response: any) => {
            if (response.responseCode === '0') {
              this.cargando = false;
              this.route.navigate(['/bono-okh']);
            } else {
              console.log('Response: '+ response.responseCode);
              this.cargando = false;
              this.router.navigate(['/bono-error'], { replaceUrl: true });
            }
          },
          (error: any) => {
            console.error('Response: '+ error);
            this.cargando = false;
            this.router.navigate(['/bono-error'], { replaceUrl: true });
          });
      }else{
        this.errorMessage = true;
      }
    }else{
        this.route.navigate(['/bono-error']);
    }
  }

  public backHome() {
    const url = sessionStorage.getItem('urlCallBack');
    console.log(url);
    window.location.href = url;
  }

  public buttonClases() {
    return ['tdp-button', this.platform === 'ios' ? 'fontIos' : 'fontAndroid'];
  }
  public linkRouter(ruta: string) {
    this.route.navigate([ruta]);
    return true;
  }

  public validateEmail(email: string):boolean {
    'use strict';
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email === ''){
      this.messageError = 'Ingresa tu correo electrónico.';
      this.messageDivError="errorClass";
      return false;
    }

    if(!email.match(emailRegex)){
      this.messageError = 'El correo electrónico no es correcto.';
      this.messageDivError="errorClass";
      return false;
    }
    this.messageDivError="";
    return true;
  }

  public  onKeydown(event: any){
    if(this.validateEmail(event.target.value)){
      this.errorMessage = false;
    }
    else {
      this.errorMessage = true;
    }
  }

}
