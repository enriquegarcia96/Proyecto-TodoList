import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class AppService{
  private endpoint:string;
  constructor(private httpClient: HttpClient) {
    this.endpoint = "http://"+ window.location.hostname + ":3000/api"
   }
   insert_usuario():Observable<any>{
    return this.httpClient.post(this.endpoint + "/insert_usuario", {responseType: 'json'} )
}

}
