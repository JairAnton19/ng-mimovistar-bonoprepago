import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bono-okh',
  templateUrl: './bono-okh.component.html',
  styleUrls: ['./bono-okh.component.scss']
})
export class BonoOkhComponent implements OnInit {
  platform = null;
  constructor() { }

  ngOnInit() {
  }
  public backHome() {
    const url = sessionStorage.getItem('urlCallBack');
    window.location.href = url;
  }
  public buttonClases() {
    return ['tdp-button', this.platform === 'ios' ? 'fontIos' : 'fontAndroid'];
  }
}
