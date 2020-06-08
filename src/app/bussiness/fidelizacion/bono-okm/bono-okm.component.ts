import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bono-okm',
  templateUrl: './bono-okm.component.html',
  styleUrls: ['./bono-okm.component.scss']
})
export class BonoOkmComponent implements OnInit {
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
