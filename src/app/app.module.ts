import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './bussiness/bono/initial/initial.component';
import { CanjedBonusComponent } from './bussiness/bono/canjed-bonus/canjed-bonus.component';
import { BonoDetailComponent } from './bussiness/bono/bono-detail/bono-detail.component';
import { ErrorComponent } from './bussiness/bono/error/error.component';
import { Angular2UsefulSwiperModule } from 'angular2-useful-swiper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetectedPlatform } from './commons/services/detectedPlatform';
import {HttpClientModule} from '@angular/common/http';
import { BonoEmptyComponent } from './bussiness/bono/bono-empty/bono-empty.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationInterceptor } from './commons/helpers/authorization.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    CanjedBonusComponent,
    BonoDetailComponent,
    ErrorComponent,
    BonoEmptyComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    Angular2UsefulSwiperModule,
    HttpClientModule
  ],
  //providers: [DetectedPlatform],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
