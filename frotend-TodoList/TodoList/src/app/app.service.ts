import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class AppService{
  private endpoint:string;
  constructor(private httpClient: HttpClient) {
    this.endpoint = 'http://' + window.location.hostname + ':3000/TodoList'
   }

   crearUsuario(load: { usuario: string; email: string; contra: string; }): Observable<any>{

     return this.httpClient.post(this.endpoint + '/crearUsuario', load,  {responseType: 'json'})

   }
   iniciarSession(): Observable<any>{
     return this.httpClient.get(this.endpoint+ '/iniciarSession', {responseType: 'json'})
   }

}
