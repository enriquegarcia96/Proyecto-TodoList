import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent}from './login/login.component';
import {RegistroComponent} from './registro/registro.component';
import {RecuClaveComponent} from './recu-clave/recu-clave.component'


const routes: Routes = [
  { path:'login', component: LoginComponent},
  {path:'registro', component:  RegistroComponent},
  {path:'recu-clave', component: RecuClaveComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
