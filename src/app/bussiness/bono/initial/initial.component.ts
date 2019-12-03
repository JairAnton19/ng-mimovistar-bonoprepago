import { GlobalService } from '../../../commons/services/global.service';
import { DetectedPlatform } from '../../../commons/services/detectedPlatform';
import { Bono } from '../../../commons/models/bono.model';
import { Component, OnInit } from '@angular/core';
import { BonoService } from 'src/app/commons/services/bono.service';
import { Router } from '@angular/router';
import { CONSTANTS } from '../../../commons/constants/constants';
import { IfStmt } from '@angular/compiler';


@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {

  slides = [];
  cargando = true;
  posicion: number = null;
  listPrices: any[] = [];
  platform = null;
  checked: boolean;
  bonoSelected: Bono = new Bono();
  // listOfBonos: any[] = [
  //   { bonoPrepago: 'Llamadas ilimitadas a todo <span class="labelNegrita">Movistar</span> por 1 día', type: 'call', selected: false },
  //   { bonoPrepago: '<span class="labelNegrita">500 MB</span> por 1 día', type: 'internet', selected: false },
  // ];
  listOfBonos: any[] = [];


  constructor(
    private bonoService: BonoService,
    private route: Router,
    private detectedPlatform: DetectedPlatform,
    private globalService: GlobalService,
    private router: Router
  ) {
  }

  async ngOnInit() {

    this.platform = this.detectedPlatform.detectPlatform();

    await this.peticionGet();
  }


  public selectedBono(index: number) {

    this.checked = true;
    this.bonoSelected.name = this.listOfBonos[index].bonoPrepago;
    this.bonoSelected.type = this.listOfBonos[index].type;
    this.bonoSelected.id = this.listOfBonos[index].bonoId;

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
      const id = this.bonoSelected.id;
      const phone = sessionStorage.getItem('phone');
      this.cargando = true;

      this.globalService.globlalGet(`${CONSTANTS.endPointCanjearBono}/${phone}/${id}`).subscribe(
        async (response: any) => {
          console.log(response);
          if (response) {
            this.cargando = false;
            this.router.navigate(['/canje']);
          }
        });
    }
  }

  public linkRouter(ruta: string) {
    this.route.navigate([ruta]);
    return true;
  }

  async peticionGet() {

    const getParams = this.globalService.getParams(['jwt']);
    if (getParams.value) {
      await this.globalService.globlalGet(`${CONSTANTS.endPointBonosHome}/${getParams.response.params.jwt}`).subscribe(
        async (response: any) => {
          console.log(response);
          // this.globalService.setToken(getParams.response.params.jwt);
          await this.validation(response);

          this.cargando = false;
          console.log('Se guardo la posicion ' + this.posicion);
          console.log('Cargando false');
        },
        (error: any) => {
          console.log(error);
          this.router.navigate(['/notFound'], { replaceUrl: true });
        }
      );
    } else {
      this.router.navigate(['/notFound'], { replaceUrl: true });
    }
  }

  async validation(response: any) {
    if (response.responseCode === '0') {
      // SETEAMOS VALORES
      // this.phone = response.responseData.phone;
      if (response.responseData.bonoList.length > 0) {
        const getParams = this.globalService.getParams(['jwt']);
        this.globalService.setToken(getParams.response.params.jwt);
        sessionStorage.setItem('urlCallBack', response.responseData.callback_url);
        sessionStorage.setItem('phone', response.responseData.phone);
        response.responseData.bonoList.forEach((element) => {
          this.listOfBonos.push({
            bonoId: element.id,
            bonoPrepago: element.description,
            type: element.type,
            selected: element.selected
          });
        });
      }  else {
        return this.router.navigate(['/bono-empty'], { replaceUrl: true });
      }
    } else if (response.responseCode === '1') {
      console.log('BONOEMPTY')
      return this.router.navigate(['/bono-empty'], { replaceUrl: true });
    } else {
     return this.router.navigate(['/notFound'], { replaceUrl: true });
    }
  }

}
