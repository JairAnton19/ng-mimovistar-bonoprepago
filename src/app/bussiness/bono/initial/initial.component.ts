import { GlobalService } from '../../../commons/services/global.service';
import { DetectedPlatform } from '../../../commons/services/detectedPlatform';
import { Bono } from '../../../commons/models/bono.model';
import { Component, OnInit } from '@angular/core';
import { BonoService } from 'src/app/commons/services/bono.service';
import { Router } from '@angular/router';
import { CONSTANTS } from '../../../commons/services/constants';


@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {

  platform = null;
  checked: boolean;
  bonoSelected: Bono = new Bono();
  listOfBonos: any[] = [
    { bonoPrepago: 'Llamadas ilimitadas a todo <span class="labelNegrita">Movistar</span> por 1 día', type: 'call', selected: false },
    { bonoPrepago: '<span class="labelNegrita">500 MB</span> por 1 día', type: 'internet', selected: false },
  ];

  constructor(
    private bonoService: BonoService,
    private route: Router,
    private detectedPlatform: DetectedPlatform,
    private globalService: GlobalService
    ) {
  }

  ngOnInit() {

    this.platform = this.detectedPlatform.detectPlatform();
    this.globalService.globlalGet(`${CONSTANTS.endPointBonoList}`).subscribe((res: any) => {
      console.log(res);
    });

  }

  public selectedBono(index: number) {

    this.checked = true;
    this.bonoSelected.name = this.listOfBonos[index].bonoPrepago;
    this.bonoSelected.type = this.listOfBonos[index].type;

    for (let i = 0; i < this.listOfBonos.length; i++) {
      if (i === index) {
        this.listOfBonos[index].selected = true;
      } else {
        this.listOfBonos[i].selected = false;
      }
    }

    return ({ checked: this.checked, name: this.bonoSelected.name, type: this.bonoSelected.type });
  }

  // change button clases
  public buttonClases(valor: boolean) {
    if (valor) {
      return ['tdp-button', this.platform === 'ios' ? 'fontIos' : 'fontAndroid'];
    } else {
      return ['tdp-button-opaque', this.platform === 'ios' ? 'fontIos' : 'fontAndroid'];
    }
  }

  // Set data of bonus selected
  public sendData(valor: boolean): void {
    if (valor) {
      this.bonoService.setBono(this.bonoSelected);
      this.route.navigate(['/canje']);
    }
  }

  public linkRouter(ruta: string) {
      this.route.navigate([ruta]);
      return true;
  }

}
