import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bono-terms',
  templateUrl: './bono-terms.component.html',
  styleUrls: ['./bono-terms.component.scss']
})
export class BonoTermsComponent implements OnInit {
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
