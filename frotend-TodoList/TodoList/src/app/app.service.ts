import {Injectable} from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppService{

  private endpoint: string;

  constructor(private httpClient: HttpClient) {

     //ruta crear tareas
     this.endpoint = 'http://' +window.location.hostname + ':3000/Lista'

    //ruta crear usuario

    this.endpoint = 'http://' + window.location.hostname + ':3000/todolist';
   }
   //registro ususario
   crearUsuario( load: any ): Observable<any>{
     return this.httpClient.post(this.endpoint + '/crearUsuario', load,  {responseType: 'json'});
   }

   //login
   login(load:any): Observable<any>{
     return this.httpClient.post(this.endpoint + '/iniciarSession', load, {responseType: 'json'});
   }


   //get listado de tareas
   get_tareas(): Observable<any>{
    return this.httpClient.get(this.endpoint + '/get_tarea/:userId', {responseType: 'json'});
  }

  insert_tareas(load: any): Observable<any>{
    return this.httpClient.post(this.endpoint + '/insert_tarea', load, {responseType: 'json'})
  }

  delete_tareas(load: any):Observable<any>{
    return this.httpClient.delete(this. endpoint + '/delete_tarea', {params: load, responseType: 'json'})
  }

  update_tareas(load: any): Observable<any>{
    return this.httpClient.put(this.endpoint + '/update_tarea', load, {responseType: 'json'})
  }

}


