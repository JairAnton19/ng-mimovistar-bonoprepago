import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './bussiness/bono/initial/initial.component';
import { CanjedBonusComponent } from './bussiness/bono/canjed-bonus/canjed-bonus.component';
import { BonoDetailComponent } from './bussiness/bono/bono-detail/bono-detail.component';
import { ErrorComponent } from './bussiness/bono/error/error.component';


const routes: Routes = [
  {path: 'bono-home/:parametro', component: InitialComponent, data: {animation: 'Home'}},
  {path: 'canje', component: CanjedBonusComponent, data: {animation: 'Canje'} },
  {path: 'bono-detail', component: BonoDetailComponent, data: {animation: 'Detail'} },
  {path: 'notFound', component: ErrorComponent},
  {path: '', redirectTo: 'bono-home/asd', pathMatch: 'full'},
  {path: '**', redirectTo: 'notFound', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// some comment
