import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bono-inital',
  templateUrl: './bono-inital.component.html',
  styleUrls: ['./bono-inital.component.scss']
})
export class BonoInitalComponent implements OnInit {
  platform = null;
  email: string;
  errorMessage = false;
  messageError: string = null;
  messageDivError: string = null;

  constructor(private route: Router) {

  }

  ngOnInit() {
  }




  public canjearBono(email: string){
    if(this.validateEmail(email)){
      this.errorMessage = false;
      // falta llamar al servicio
      this.route.navigate(['/bono-okm']);
    }
    else {
      this.errorMessage = true;
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
