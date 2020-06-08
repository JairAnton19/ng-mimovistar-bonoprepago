import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../../commons/services/global.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bono-inital',
  templateUrl: './bono-inital.component.html',
  styleUrls: ['./bono-inital.component.scss'],
})

export class BonoInitalComponent implements OnInit {
  platform = null;
  email: string;
  errorMessage = false;
  messageError: string = null;
  messageDivError: string = null;
  bonoLista: any[] = [];
  listOfBonosPostpagoHogar: any[] = [];
  bonoGB: string = null;
  phone: string = null;
  subscriberId: string = null;
  id: string = null;
  trackingCD: string = null;
  descriptionBono: string = null;
  timeBono: string = null;
  dateBono: string = null;
  typeBono: string = null;
  emailField = false;

  constructor(private route: Router, private globalService: GlobalService, private titleService: Title) {

  }

  async ngOnInit(){
    this.listOfBonosPostpagoHogar = this.globalService.getBonoListPostpagoHogar()
    console.log('listOfBonosPostpagoHogar initial');
    console.log(this.listOfBonosPostpagoHogar);
    await this.loadBono(this.listOfBonosPostpagoHogar);
    this.titleService.setTitle( 'Bono Fidelización' );
  }


  async loadBono(bonoList){
    if(bonoList.length > 0){
      this.bonoGB = bonoList[0].description.bonoGB;
      this.descriptionBono = bonoList[0].description.descriptionBono;
      this.timeBono = bonoList[0].description.timeBono;
      this.dateBono = bonoList[0].description.dateBono;
      this.typeBono = bonoList[0].lineType;
      this.phone = bonoList[0].phone;
      this.subscriberId = bonoList[0].subscriberId;
      this.id = bonoList[0].id;
      this.trackingCD = bonoList[0].trackingCD;

      if(bonoList[0].lineType !== undefined || bonoList[0].lineType !== null){
        this.emailField = bonoList[0].lineType.toUpperCase() === 'POSTPAGO' ? false : true;
      }
    }
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
    if(this.typeBono.toUpperCase() === 'POSTPAGO'){
      console.log('Entro a postpago');
      //Servicio Canjear
      this.route.navigate(['/bono-okm']);
    }else if(this.typeBono.toUpperCase() === 'HOGAR'){
      console.log('Entro a hogar');
      //Servicio Canjear
      var email = ((document.getElementById('inputEmail') as HTMLInputElement).value);
      if(this.validateEmail(email)){
        this.errorMessage = false;
        console.log('Val OK - Bono');
        this.route.navigate(['/bono-okh']);
      }else{
        this.errorMessage = true;
      }
    }else{
        this.route.navigate(['/bono-error']);
    }
  }

  public backHome() {
    const url = sessionStorage.getItem('urlCallBack');
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
