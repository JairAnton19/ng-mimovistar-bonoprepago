import { Component, OnInit } from '@angular/core';
import { BonoService } from 'src/app/services/bono.service';

@Component({
  selector: 'app-canjed-bonus',
  templateUrl: './canjed-bonus.component.html',
  styleUrls: ['./canjed-bonus.component.scss']
})
export class CanjedBonusComponent implements OnInit {

  constructor(
    private _bonusService: BonoService
  ) { }

  ngOnInit() {
    let bono = this._bonusService.getBono();
    console.log(bono)
  }

}
