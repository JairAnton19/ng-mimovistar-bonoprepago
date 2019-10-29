import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './Components/initial/initial.component';
import { CanjedBonusComponent } from './Components/canjed-bonus/canjed-bonus.component';

const routes: Routes = [
  { path:'', component:InitialComponent },
  { path:'canje', component:CanjedBonusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
