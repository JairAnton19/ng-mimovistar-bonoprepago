import { CanjedBonusComponent } from './../canjed-bonus/canjed-bonus.component';
import { Component, OnInit } from '@angular/core';
import { Bono } from '../../../commons/models/bono.model';
import { BonoService } from 'src/app/commons/services/bono.service';
import { Router } from '@angular/router';
import { DetectedPlatform } from '../../../commons/services/detectedPlatform';

@Component({
  selector: 'app-bono-empty',
  templateUrl: './bono-empty.component.html',
  styleUrls: ['./bono-empty.component.scss',]
})
export class BonoEmptyComponent implements OnInit {

  bono: Bono = new Bono();
  textPrincipal: string = null;
  platform = null;

  constructor(private bonusService: BonoService, private route: Router) { }

  ngOnInit() {
  }

  public buttonClases() {
    return ['tdp-button', this.platform === 'ios' ? 'fontIos' : 'fontAndroid'];
  }

  public backHome() {
    const url = sessionStorage.getItem('urlCallBack');
    window.location.href = url;
  }

  public linkRouters(ruta: string): void {
    this.route.navigate([ruta]);
  }

}

