import { Bono } from '../../../commons/models/bono.model';
import { Component, OnInit } from '@angular/core';
import { BonoService } from 'src/app/commons/services/bono.service';
import { Router } from '@angular/router';
import { DetectedPlatform } from '../../../commons/services/detectedPlatform';

@Component({
  selector: 'app-canjed-bonus',
  templateUrl: './canjed-bonus.component.html',
  styleUrls: ['./canjed-bonus.component.scss']
})
export class CanjedBonusComponent implements OnInit {

  bono: Bono = new Bono();
  textPrincipal: string = null;
  platform = null;

  constructor(private bonusService: BonoService, private route: Router, private detectedPlatform: DetectedPlatform) {
    this.bono = this.bonusService.getBono();
    if (!this.bono) {
      this.route.navigate(['/notFound']);
    }
  }

  async ngOnInit() {
    this.textPrincipal = '¡Has canjeado tu bono <span class="negritaTotal">' +  this.bono.name + '</span> con exito!';
    this.platform = this.detectedPlatform.detectPlatform();
  }

  public backHome() {
    const url = sessionStorage.getItem('urlCallBack');
    window.location.href = url;
  }

  public linkRouters(ruta: string): void {
    this.route.navigate([ruta]);
  }

  public buttonClases() {
    return ['tdp-button', this.platform === 'ios' ? 'fontIos' : 'fontAndroid'];
  }

}
