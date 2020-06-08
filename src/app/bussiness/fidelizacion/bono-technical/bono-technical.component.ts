import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bono-technical',
  templateUrl: './bono-technical.component.html',
  styleUrls: ['./bono-technical.component.scss']
})
export class BonoTechnicalComponent implements OnInit {
  platform = null;
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'Bono Fidelización' );
  }
  public backHome() {
    const url = sessionStorage.getItem('urlCallBack');
    window.location.href = url;
  }
  public buttonClases() {
    return ['tdp-button', this.platform === 'ios' ? 'fontIos' : 'fontAndroid'];
  }
}
