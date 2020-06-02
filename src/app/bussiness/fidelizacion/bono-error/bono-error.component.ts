import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bono-error',
  templateUrl: './bono-error.component.html',
  styleUrls: ['./bono-error.component.scss']
})
export class BonoErrorComponent implements OnInit {
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
