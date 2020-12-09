import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  public Usuario = {
    email: '',
    password: ''
  }


    constructor(public service:AppService, private router: Router) {

    }

    login(){
      return this.service.login(this.Usuario).subscribe(
        data => {
          console.log(data)
          this.router.navigate(["/listado"])
        },
        error => console.log(error)
      )
    }


  }
