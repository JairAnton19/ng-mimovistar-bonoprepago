import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-bono-terms',
  templateUrl: './bono-terms.component.html',
  styleUrls: ['./bono-terms.component.scss']
})

export class BonoTermsComponent implements OnInit {
  platform = null;
  constructor(private _location: Location) { }

  ngOnInit() {
  }

  public backClicked() {
    this._location.back();
  }

  public backHome() {
    const url = sessionStorage.getItem('urlCallBack');
    window.location.href = url;
  }
  public buttonClases() {
    return ['tdp-button', this.platform === 'ios' ? 'fontIos' : 'fontAndroid'];
  }
}
