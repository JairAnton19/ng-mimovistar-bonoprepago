import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './Components/initial/initial.component';
import { CanjedBonusComponent } from './Components/canjed-bonus/canjed-bonus.component';
import { BonoDetailComponent } from './Components/bono-detail/bono-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    CanjedBonusComponent,
    BonoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
