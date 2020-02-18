import { GlobalService } from './../../../commons/services/global.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { DetectedPlatform } from '../../../commons/services/detectedPlatform';
import { CONSTANTS } from 'src/app/commons/constants/constants';
import { Router } from '@angular/router';
import {Location} from '@angular/common';



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
  @ViewChild('swiper', { static: false }) swiperChild;
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


  constructor(
    private detectedPlatform: DetectedPlatform,
    private globalService: GlobalService,
    private router: Router,
    private _location: Location
  ) { }

  ngOnInit() {
    this.platform = this.detectedPlatform.detectPlatform();
    console.log(sessionStorage.getItem('phone'))
    this.getDetailBono();
  }


  public backHome() {
    const url = sessionStorage.getItem('urlCallBack');
    window.location.href = url;
  }

  public backClicked() {
    this._location.back();
  }

  public getDetailBono() {
    // const phone = sessionStorage.getItem('phone');
    const body = {
      phone: sessionStorage.getItem('phone')
    };
    this.globalService.globlalPost(`${CONSTANTS.endPointBonosList}`, body).subscribe((res: any) => {
      console.log(res);
      this.permanencia = parseInt(res.permanencia, 10);
      // this.permanencia = 100;
      if (this.permanencia !== 1) {
        if (res.promotionList) {
          if (res.promotionList.length > 0) {
            this.cargando = false;
            res.promotionList.forEach((element, index) => {
              console.log(index);
              console.log(res.promotionList.length-1)
              let isCanje = false;
              const rango = element.rango.split(',');

              // if (this.permanencia > 0) {
              //   if (rango[0] <= this.permanencia && rango[1] >= this.permanencia) {
              //     // isCanje = true;
              //     console.log('2');
              //     this.swiperChild.swiper.slideTo(index);
              //   } else if (res.promotionList.length - 1 === index && rango[0] <= this.permanencia) {
              //     console.log('1');
              //     // isCanje = true;
              //     this.swiperChild.swiper.slideTo(index);

              //   }
              // }

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
      } else {
        this.cargando = false;
        return this.router.navigate(['/bono-empty'], { replaceUrl: true });
      }
    });
  }

  public buttonClases() {
    return ['tdp-button', this.platform === 'ios' ? 'fontIos' : 'fontAndroid'];
  }

}
