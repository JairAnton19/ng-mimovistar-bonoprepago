import { Component, OnInit } from '@angular/core';
import { DetectedPlatform } from './../../functions/detectedPlatform';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  platform = null
  constructor(private detectedPlatform: DetectedPlatform) { }

  ngOnInit() {
    this.platform = this.detectedPlatform.detectPlatform()
  }

  public buttonClases(){
    return ['tdp-button',this.platform=='ios'?'fontIos':'fontAndroid'];
  }

}
