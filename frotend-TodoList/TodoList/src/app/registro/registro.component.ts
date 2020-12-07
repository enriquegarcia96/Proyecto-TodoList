import { Component, OnInit } from '@angular/core';
import { } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public  Usuario = {
    usuario: '',
    email: '',
    contra: ''

  }
  constructor(public service:AppService) {

  }

   crearUsuario(){
    var response;
    this.service.crearUsuario(this.Usuario).subscribe(
        data => response = data,
        err => {
            console.log("Error")
        },
        ()=>{
            this.Usuario = {
                usuario: "",
                email:"",
                contra:"",

            }


        }
    )
}


}

