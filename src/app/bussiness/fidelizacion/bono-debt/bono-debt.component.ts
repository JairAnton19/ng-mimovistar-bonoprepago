import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bono-debt',
  templateUrl: './bono-debt.component.html',
  styleUrls: ['./bono-debt.component.scss']
})
export class BonoDebtComponent implements OnInit {
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
