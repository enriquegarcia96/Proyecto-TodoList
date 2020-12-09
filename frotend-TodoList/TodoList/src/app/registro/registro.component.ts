import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
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

  constructor(public service: AppService, private router: Router) {

  }

   crearUsuario(): void{
    let response;

    this.service.crearUsuario(this.Usuario).subscribe(
        data => response = data,
        err => {
            console.log('Error', err);
        },
        () => {
          this.router.navigate(["/login"])
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

