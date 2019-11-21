import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './components/initial/initial.component';
import { CanjedBonusComponent } from './components/canjed-bonus/canjed-bonus.component';
import { BonoDetailComponent } from './components/bono-detail/bono-detail.component';
import { ErrorComponent } from './components/error/error.component';
import { Angular2UsefulSwiperModule } from 'angular2-useful-swiper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetectedPlatform } from './functions/detectedPlatform';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    CanjedBonusComponent,
    BonoDetailComponent,
    ErrorComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    Angular2UsefulSwiperModule,
    HttpClientModule
  ],
  providers: [DetectedPlatform],
  bootstrap: [AppComponent]
})
export class AppModule { }
