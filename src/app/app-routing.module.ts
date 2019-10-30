import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './Components/initial/initial.component';
import { CanjedBonusComponent } from './Components/canjed-bonus/canjed-bonus.component';

import { ErrorComponent } from './Components/error/error.component';

const routes: Routes = [
  // {path:'bono-prepago-home/:parametro', component:InitialComponent},
  { path:'bono/:parametro', component:InitialComponent },
  { path:'canje', component:CanjedBonusComponent },
  { path:'notFound', component:ErrorComponent },
  { path: '**', redirectTo:'notFound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
