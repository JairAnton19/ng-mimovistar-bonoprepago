import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bono-debt',
  templateUrl: './bono-debt.component.html',
  styleUrls: ['./bono-debt.component.scss']
})
export class BonoDebtComponent implements OnInit {
  platform = null;
  originApp: string = null;
  origen = true;
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'Bono Fidelización' );
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
