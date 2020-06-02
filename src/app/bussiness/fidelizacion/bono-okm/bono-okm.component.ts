import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bono-okm',
  templateUrl: './bono-okm.component.html',
  styleUrls: ['./bono-okm.component.scss']
})
export class BonoOkmComponent implements OnInit {
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
