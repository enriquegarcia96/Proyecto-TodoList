import { Component, OnInit } from '@angular/core';
import { } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {

  public  Usuario = {
    userName: '',
    email: '',
    password: ''
  };

  constructor(public service: AppService) {

  }

   crearUsuario(): void{
    let response;

    this.service.crearUsuario(this.Usuario).subscribe(
        data => response = data,
        err => {
            console.log('Error', err);
        },
        () => {
          this.limpiarDatos();
        }
    );
}

  limpiarDatos(): void{
    this.Usuario = {
      userName: '',
      email: '',
      password: '',

  };
  }


}

