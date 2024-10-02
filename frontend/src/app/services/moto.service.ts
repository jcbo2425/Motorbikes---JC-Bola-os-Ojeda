import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  endpoint = 'http://localhost:8080/api/motorbikes';

  constructor (private httpClient: HttpClient) { }

  getMotos(){
    return this.httpClient.get(this.endpoint);
  }
}
