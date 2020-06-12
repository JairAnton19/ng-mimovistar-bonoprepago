import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bono-error',
  templateUrl: './bono-error.component.html',
  styleUrls: ['./bono-error.component.scss']
})
export class BonoErrorComponent implements OnInit {
  platform = null;
  originApp: string = null;
  origen = true;
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'Beneficios Movistar' );
    this.loadBono(sessionStorage.getItem('origenAppConst'));
  }
  async loadBono(originApp){
    console.log(originApp);
    if(originApp === 'app_hogar'){
      this.origen = false;
    } else if(originApp === 'app_novum'){
      this.origen = true;
    } else {
      this.origen = true;
    }
  }
  public backHomeApp() {
    const url = sessionStorage.getItem('urlCallBack');
    window.location.href = url;
  }
  public backHome() {
    const jwt = sessionStorage.getItem('urlJwt')
    window.location.href = jwt;
  }
  public buttonClases() {
    return ['tdp-button', this.platform === 'ios' ? 'fontIos' : 'fontAndroid'];
  }
}
