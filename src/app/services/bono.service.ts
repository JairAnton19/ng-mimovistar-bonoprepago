import { Injectable } from '@angular/core';
import { Bono } from '../models/bono.model';

@Injectable({
  providedIn: 'root'
})
export class BonoService {

  private bono: Bono;
  constructor() {

  }

  public getBono() {
    // this.bono = JSON.parse(sessionStorage.getItem('bonoSelected'));
    return this.bono;
  }

  setBono(bono:Bono) {
    return  this.bono = bono;
   
  }

  
}
