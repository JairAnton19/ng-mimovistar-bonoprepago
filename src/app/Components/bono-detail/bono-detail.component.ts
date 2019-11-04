import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper'

@Component({
  selector: 'app-bono-detail',
  templateUrl: './bono-detail.component.html',
  styleUrls: ['./bono-detail.component.scss']
})

export class BonoDetailComponent implements OnInit {
  
  platform = null
  slides = [
    {tiempoP:'De 2 a 3 meses',plan:'Minutos ilimitados a todo<br/><font class="font-color">Movistar</font> por 1 día',mb:'100MB',tiempoS:'por 1 día',canje:false},
    {tiempoP:'De 4 a 6 meses',plan:'Llamadas ilimitadas a todo<br/><font style="font-weigth:600; color:#2A2A3C">Movistar</font> por 1 día',mb:'500MB',tiempoS:'por 1 día',canje:true},
    {tiempoP:'De 7 a 9 meses',plan:'Minutos ilimitados a todo<br/> <font style="font-weigth:600; color:#2A2A3C">Movistar</font> por 1 día',mb:'800MB',tiempoS:'por 1 día',canje:false}
  ]

  config: SwiperOptions = {

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false
    },
    pagination: {
      el: ".swiper-pagination"
    }

  }

  constructor() { }

  ngOnInit() {
    
    let isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    }

    if( isMobile.iOS() ) this.platform='ios'
    if( isMobile.Android() ) this.platform='android'

  }

}
