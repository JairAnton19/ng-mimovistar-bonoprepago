import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './bussiness/bono/initial/initial.component';
import { CanjedBonusComponent } from './bussiness/bono/canjed-bonus/canjed-bonus.component';
import { BonoDetailComponent } from './bussiness/bono/bono-detail/bono-detail.component';
import { ErrorComponent } from './bussiness/bono/error/error.component';
import { BonoEmptyComponent } from './bussiness/bono/bono-empty/bono-empty.component';

import { AuthGuard } from '../app/commons/guards/auth.guard';


const routes: Routes = [
  {path: 'bono-home', component: InitialComponent, data: {animation: 'Home'}},
  {path: 'canje', component: CanjedBonusComponent, data: {animation: 'Canje'}, canActivate: [AuthGuard] },
  {path: 'bono-detail', component: BonoDetailComponent, data: {animation: 'Detail'}, canActivate: [AuthGuard] },
  {path: 'notFound', component: ErrorComponent},
  {path: 'bono-empty', component: BonoEmptyComponent},
  {path: '', redirectTo: 'bono-home', pathMatch: 'full'},
  {path: '**', redirectTo: 'notFound', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// some comment
