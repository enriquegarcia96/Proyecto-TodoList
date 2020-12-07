import {Injectable} from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppService{

  private endpoint: string;

  constructor(private httpClient: HttpClient) {

    this.endpoint = 'http://' + window.location.hostname + ':3000/todolist';
   }

   crearUsuario( load: any ): Observable<any>{
     return this.httpClient.post(this.endpoint + '/crearUsuario', load,  {responseType: 'json'});

   }
   iniciarSession(): Observable<any>{
     return this.httpClient.get(this.endpoint + '/iniciarSession', {responseType: 'json'});
   }

}
