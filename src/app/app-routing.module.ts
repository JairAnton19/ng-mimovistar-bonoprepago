import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './bussiness/bono/initial/initial.component';
import { CanjedBonusComponent } from './bussiness/bono/canjed-bonus/canjed-bonus.component';
import { BonoDetailComponent } from './bussiness/bono/bono-detail/bono-detail.component';
import { ErrorComponent } from './bussiness/bono/error/error.component';
import { BonoEmptyComponent } from './bussiness/bono/bono-empty/bono-empty.component';
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

import { AuthGuard } from '../app/commons/guards/auth.guard';


const routes: Routes = [
  {path: 'bono-home', component: InitialComponent, data: {animation: 'Home'}},
  {path: 'canje', component: CanjedBonusComponent, data: {animation: 'Canje'}, canActivate: [AuthGuard] },
  {path: 'bono-detail', component: BonoDetailComponent, data: {animation: 'Detail'}, canActivate: [AuthGuard] },
  {path: 'notFound', component: ErrorComponent},
  {path: 'bono-empty', component: BonoEmptyComponent},
  {path: 'bono-inital', component: BonoInitalComponent},
  {path: 'bono-canjed', component: BonoCanjedComponent},
  {path: 'bono-terms', component: BonoTermsComponent},
  {path: 'bono-debt', component: BonoDebtComponent},
  {path: 'bono-end', component: BonoEndComponent},
  {path: 'bono-max', component: BonoMaxComponent},
  {path: 'bono-technical', component: BonoTechnicalComponent},
  {path: 'bono-error', component: BonoErrorComponent},
  {path: 'bono-okm', component: BonoOkmComponent},
  {path: 'bono-okh', component: BonoOkhComponent},
  {path: '', redirectTo: 'bono-home', pathMatch: 'full'},
  {path: '**', redirectTo: 'notFound', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// some comment
