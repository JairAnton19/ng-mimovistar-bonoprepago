import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bono-technical',
  templateUrl: './bono-technical.component.html',
  styleUrls: ['./bono-technical.component.scss']
})
export class BonoTechnicalComponent implements OnInit {
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
}
