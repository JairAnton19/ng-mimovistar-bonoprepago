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
import { BonoInitalComponent } from './bussiness/fidelizacion/bono-inital/bono-inital.component';
import { BonoCanjedComponent } from './bussiness/fidelizacion/bono-canjed/bono-canjed.component';
import { BonoTermsComponent } from './bussiness/fidelizacion/bono-terms/bono-terms.component';
import { BonoDebtComponent } from './bussiness/fidelizacion/bono-debt/bono-debt.component';
import { BonoEndComponent } from './bussiness/fidelizacion/bono-end/bono-end.component';
import { BonoMaxComponent } from './bussiness/fidelizacion/bono-max/bono-max.component';
import { BonoTechnicalComponent } from './bussiness/fidelizacion/bono-technical/bono-technical.component';
import { BonoErrorComponent } from './bussiness/fidelizacion/bono-error/bono-error.component';
import { BonoOkmComponent } from './bussiness/fidelizacion/bono-okm/bono-okm.component';
import { BonoOkhComponent } from './bussiness/fidelizacion/bono-okh/bono-okh.component';
import { NoBonoComponent } from './bussiness/fidelizacion/no-bono/no-bono.component';


@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    CanjedBonusComponent,
    BonoDetailComponent,
    ErrorComponent,
    BonoEmptyComponent,
    BonoInitalComponent,
    BonoCanjedComponent,
    BonoTermsComponent,
    BonoDebtComponent,
    BonoEndComponent,
    BonoMaxComponent,
    BonoTechnicalComponent,
    BonoErrorComponent,
    BonoOkmComponent,
    BonoOkhComponent,
    NoBonoComponent,
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
