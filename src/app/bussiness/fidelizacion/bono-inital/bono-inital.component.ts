import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bono-inital',
  templateUrl: './bono-inital.component.html',
  styleUrls: ['./bono-inital.component.scss']
})
export class BonoInitalComponent implements OnInit {
  platform = null;
  constructor(private route: Router) { }

  ngOnInit() {
  }
  public backHome() {
    const url = sessionStorage.getItem('urlCallBack');
    window.location.href = url;
  }
  public buttonClases() {
    return ['tdp-button', this.platform === 'ios' ? 'fontIos' : 'fontAndroid'];
  }
  public linkRouter(ruta: string) {
    this.route.navigate([ruta]);
    return true;
  }

}
