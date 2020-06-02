import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bono-end',
  templateUrl: './bono-end.component.html',
  styleUrls: ['./bono-end.component.scss']
})
export class BonoEndComponent implements OnInit {
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
