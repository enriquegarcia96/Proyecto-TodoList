import { Component } from '@angular/core';
import {AppService} from '../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent {

  public Passwords ={
    password: '',
    //password2: ''
  };


  //TODO: como enviar un parametro en angular por url
  constructor(public service: AppService, private router: Router ) { }


  enviarPassword() {
    return this.service.newPassword(this.Passwords).subscribe(
        data =>{
          console.log(data)
          this.router.navigate(['/login'])
        },
        error => console.log(error)
    )
  }
}
