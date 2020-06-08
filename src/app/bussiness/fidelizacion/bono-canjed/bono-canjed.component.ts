import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bono-canjed',
  templateUrl: './bono-canjed.component.html',
  styleUrls: ['./bono-canjed.component.scss']
})
export class BonoCanjedComponent implements OnInit {

  platform = null;

  constructor(private route: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'Bono Fidelización' );
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
