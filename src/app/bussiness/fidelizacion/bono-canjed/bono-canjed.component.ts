import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bono-canjed',
  templateUrl: './bono-canjed.component.html',
  styleUrls: ['./bono-canjed.component.scss']
})
export class BonoCanjedComponent implements OnInit {

  platform = null;
  originApp: string = null;
  origen = true;
  constructor(private route: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'Beneficios Movistar' );
    this.loadBono(sessionStorage.getItem('origenAppConst'));
  }
  async loadBono(originApp){
    //console.log(originApp);
    if(originApp === 'app_hogar'){
      this.origen = false;
    } else {
      this.origen = true;
    }
  }
  public backHome() {
    const url = sessionStorage.getItem('urlCallBack');
    window.location.href = url;
  }
  public buttonClases() {
    return ['tdp-button', this.platform === 'ios' ? 'fontIos' : 'fontAndroid'];
  }
  public linkRouter(ruta: string) {
    this.route.navigate([ruta]);
    return true;
  }

}
