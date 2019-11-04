import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './Components/initial/initial.component';
import { CanjedBonusComponent } from './Components/canjed-bonus/canjed-bonus.component';
import { BonoDetailComponent } from './Components/bono-detail/bono-detail.component';
import { ErrorComponent } from './Components/error/error.component';


const routes: Routes = [
  {path:'bono-home/:parametro', component:InitialComponent},
  {path:'canje', component:CanjedBonusComponent },
  {path:'bono', component:BonoDetailComponent },
  {path:'notFound', component:ErrorComponent},
  {path: '**', redirectTo:'notFound', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
