import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-bono',
  templateUrl: './no-bono.component.html',
  styleUrls: ['./no-bono.component.scss']
})
export class NoBonoComponent implements OnInit {
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
