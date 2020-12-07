import { Component, OnInit } from '@angular/core';
import {} from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  public Usuario = {
    usuario: "",
    email:"",
    contra: ""


  }


    constructor(public service:AppService) {

    }


  }
