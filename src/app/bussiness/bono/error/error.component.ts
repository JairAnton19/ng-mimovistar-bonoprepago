import { Component, OnInit } from '@angular/core';
import { DetectedPlatform } from '../../../commons/services/detectedPlatform';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  callbackUrl;
  platform = null;
  originApp: string = null;
  origen = true;
  
  constructor(private detectedPlatform: DetectedPlatform) { 
    
    this.callbackUrl  = sessionStorage.getItem('urlCallBack') === 'null' ? false : true;
    
  }

  ngOnInit() {
    this.platform = this.detectedPlatform.detectPlatform();
    this.originApp =sessionStorage.getItem('origenAppConst');
    this.loadBono(this.originApp);
  }
  async loadBono(originApp){
    console.log(originApp);
    if(originApp === 'app_hogar'){
      this.origen = false;
    } else if(originApp === 'app_novum'){
      this.origen = true;
    }else {
      this.origen = true;
    }
  }
  public backHome() {
    const url = sessionStorage.getItem('urlCallBack');
    window.location.href = url;
  }

  public buttonClases() {
    return ['tdp-button', this.platform  === 'ios' ? 'fontIos' : 'fontAndroid'];
  }

}
