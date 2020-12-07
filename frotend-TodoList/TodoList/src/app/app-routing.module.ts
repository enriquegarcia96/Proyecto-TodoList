import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent}from './login/login.component';
import {RegistroComponent} from './registro/registro.component';
import {RecuClaveComponent} from './recu-clave/recu-clave.component';
import {ListadoComponent} from './listado/listado.component';
import {AgregarTareaComponent} from './agregar-tarea/agregar-tarea.component'


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registro', component:  RegistroComponent},
  {path: 'recu-clave', component: RecuClaveComponent},
  {path: 'listado', component: ListadoComponent},
  {path: 'agregar-tarea', component: AgregarTareaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
