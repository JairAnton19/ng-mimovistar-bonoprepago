import { GlobalService } from './../../../commons/services/global.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { DetectedPlatform } from '../../../commons/services/detectedPlatform';
import { CONSTANTS } from 'src/app/commons/constants/constants';

@Component({
  selector: 'app-bono-detail',
  templateUrl: './bono-detail.component.html',
  styleUrls: ['./bono-detail.component.scss'],
})

export class BonoDetailComponent implements OnInit {
  platform = null;
  permanencia;
  cargando = true;
  initial: any;
  @ViewChild('swiper', {static: false}) swiperChild;
  // slides = [
  //   {tiempoP: 'De 2 a 3 meses',
  //   plan: 'Minutos ilimitados a todo<br/><label class="labelMovistar">Movistar</label> por 1 día',
  //   mb: '100MB', tiempoS: 'por 1 día', canje: false},
  //   {tiempoP: 'De 4 a 6 meses',
  //   plan: 'Llamadas ilimitadas a todo<br/><label class="labelMovistar">Movistar</label> por 1 día',
  //   mb: '500MB', tiempoS: 'por 1 día', canje: true},
  //   {tiempoP: 'De 7 a 9 meses',
  //   plan: 'Minutos ilimitados a todo<br/><label class="labelMovistar">Movistar</label> por 1 día',
  //   mb: '800MB', tiempoS: 'por 1 día', canje: false}
  // ];
  slides = [];
  config: SwiperOptions = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false
    },
    pagination: {
      el: '.swiper-pagination'
    }
  };


  constructor(private detectedPlatform: DetectedPlatform, private globalService: GlobalService) { }

  ngOnInit() {
    this.platform = this.detectedPlatform.detectPlatform();

    this.getDetailBono();
  }


  public backHome() {
    const url = sessionStorage.getItem('urlCallBack');
    window.location.href = url;
  }

  public getDetailBono() {
    const phone = sessionStorage.getItem('phone');
    this.globalService.globlalGet(`${CONSTANTS.endPointBonosList}/${phone}`).subscribe((res: any) => {
      console.log(res);
      // this.permanencia = res.permanencia;
      this.permanencia = 21;
      if (res.promotionList) {
        if (res.promotionList.length > 0) {
          this.cargando = false;
          res.promotionList.forEach((element , index) => {
            console.log(index);
            let isCanje = false;
            if (this.permanencia > 0) {
              const rango = element.rango.split(',');
              console.log('PRUEBA');
              console.log(this.swiperChild);
              if (rango[0] >= this.permanencia && rango[1] <= this.permanencia ) {
                isCanje = true;
                this.swiperChild.swiper.slideTo(index);
              } else if ( index === res.promotionList.length - 1 ) {
                isCanje = true;
                this.swiperChild.swiper.slideTo(index);
              }
            }
            this.slides.push({
              tiempoP: element.tiempop,
              plan: element.plan,
              mb: element.mb,
              diasmb: element.diasmb,
              tiempoS: element.tiempoS,
              canje: isCanje
            });
          });
        }
      }
    });
  }

  public buttonClases() {
      return ['tdp-button', this.platform === 'ios' ? 'fontIos' : 'fontAndroid'];
  }

}
