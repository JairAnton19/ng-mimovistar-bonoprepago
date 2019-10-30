import { Bono } from './../../models/bono.model';
import { Component, OnInit } from '@angular/core';
import { BonoService } from 'src/app/services/bono.service';

@Component({
  selector: 'app-canjed-bonus',
  templateUrl: './canjed-bonus.component.html',
  styleUrls: ['./canjed-bonus.component.scss']
})
export class CanjedBonusComponent implements OnInit {

  bono: Bono = new Bono;

  constructor(
    private _bonusService: BonoService
  ) { }

  ngOnInit() {
    console.log(navigator);
    this.bono = this._bonusService.getBono();
  }

}
