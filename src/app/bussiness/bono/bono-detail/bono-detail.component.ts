import { GlobalService } from './../../../commons/services/global.service';
import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { DetectedPlatform } from '../../../commons/services/detectedPlatform';
import { CONSTANTS } from 'src/app/commons/services/constants';

@Component({
  selector: 'app-bono-detail',
  templateUrl: './bono-detail.component.html',
  styleUrls: ['./bono-detail.component.scss'],
})

export class BonoDetailComponent implements OnInit {
  platform = null;
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
    this.globalService.globlalGet(`${CONSTANTS.endPointBonoList}`).subscribe((res: any) => {
      console.log(res);
      if(res.promotionList){
        if(res.promotionList.length > 0){
          res.promotionList.forEach(element => {
            this.slides.push({
              tiempoP: element.tiempop,
              plan: element.plan,
              mb: element.mb,
              diasmb: element.diasmb
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
