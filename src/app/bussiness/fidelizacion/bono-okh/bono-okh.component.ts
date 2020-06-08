import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bono-okh',
  templateUrl: './bono-okh.component.html',
  styleUrls: ['./bono-okh.component.scss']
})
export class BonoOkhComponent implements OnInit {
  platform = null;
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'Confirmación' );
  }
  public backHome() {
    const url = sessionStorage.getItem('urlCallBack');
    window.location.href = url;
  }
  public buttonClases() {
    return ['tdp-button', this.platform === 'ios' ? 'fontIos' : 'fontAndroid'];
  }
}
