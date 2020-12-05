import { Component, OnInit } from '@angular/core';
import {} from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public ingreso_usuario: any[];
  public Usuario = {
    usuario: "",
    contra: ""

  }
  constructor(public service:AppService) {
    this.ingreso_usuario = [];
   }

   insert_usuario(){
    var response;
    this.service.insert_usuario().subscribe(
        data => response = data,
        err => {
            console.log("Error")
        },
        ()=>{
            this.Usuario = {
                usuario: "",
                contra:"",

            }


        }
    )
}

  ngOnInit(): void {
  }

}
