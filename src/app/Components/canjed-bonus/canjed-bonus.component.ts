import { Bono } from './../../models/bono.model';
import { Component, OnInit } from '@angular/core';
import { BonoService } from 'src/app/services/bono.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canjed-bonus',
  templateUrl: './canjed-bonus.component.html',
  styleUrls: ['./canjed-bonus.component.scss']
})
export class CanjedBonusComponent implements OnInit {

  bono: Bono = new Bono;

  constructor(
    private _bonusService: BonoService,
    private route: Router,

  ) { }

  ngOnInit() {
    console.log(navigator);
    this.bono = this._bonusService.getBono();
    if(this.bono){

    }else{
      this.route.navigate(['/notFound']);    
    }
  }

  public goToDetail(): void{
    this.route.navigate(['/bono-detail']);    
  }

}
