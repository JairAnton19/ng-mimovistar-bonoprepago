import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './Components/initial/initial.component';
import { ErrorComponent } from './Components/error/error.component';

const routes: Routes = [
  {path:'bono-prepago-home/:parametro', component:InitialComponent},
  {path:'notFound', component:ErrorComponent},
  {path: '**', redirectTo:'notFound', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
