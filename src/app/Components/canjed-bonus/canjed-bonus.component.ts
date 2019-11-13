import { Bono } from './../../models/bono.model';
import { Component, OnInit } from '@angular/core';
import { BonoService } from 'src/app/services/bono.service';
import { Router } from '@angular/router';
import { DetectedPlatform } from './../../functions/detectedPlatform';

@Component({
  selector: 'app-canjed-bonus',
  templateUrl: './canjed-bonus.component.html',
  styleUrls: ['./canjed-bonus.component.scss']
})
export class CanjedBonusComponent implements OnInit {

  bono: Bono = new Bono;
  textPrincipal: string = null
  platform = null

  constructor(private _bonusService: BonoService,private route: Router,private detectedPlatform: DetectedPlatform) { 

    this.bono = this._bonusService.getBono()
    
  }

  async ngOnInit() {
    this.platform = this.detectedPlatform.detectPlatform()
    this.existBono()
  }

  public existBono(){

    if(this.bono){
      this.textPrincipal = "¡Has canjeado tu bono <span class='negritaTotal'>" +  this.bono.name + "</span> con exito!"
    }else{
      this.route.navigate(['']);    
    }
    return true

  }

  public linkRouters(ruta:string){
    this.route.navigate([ruta])
    return true
  }

  public buttonClases(){
    return ['tdp-button',this.platform=='ios'?'fontIos':'fontAndroid'];
  }

}
