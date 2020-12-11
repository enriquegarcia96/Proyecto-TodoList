import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-recu-clave',
  templateUrl: './recu-clave.component.html',
  styleUrls: ['./recu-clave.component.css']
})
export class RecuClaveComponent {

  public Email = {
      email: ''
  }


  constructor(public service: AppService) { }

  olvidoSuPassword(): void{
    let respuesta;
    this.service.olvidoSuPassword(this.Email).subscribe(
      data => respuesta = data,
      error =>{
        console.log('Error', error);
      },
      ()=>{
          this.Email= {
            email: ''
          }
      }
    );
  }



}

