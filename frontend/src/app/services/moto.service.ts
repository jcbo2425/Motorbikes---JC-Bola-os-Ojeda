import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  endpoint = 'http://localhost:8080/api/motorbikes';

  constructor (private httpClient: HttpClient) { }

  getMotos(){
    return this.httpClient.get(this.endpoint);
  }

  create(moto: any) {
    const headers = new HttpHeaders({
      'Content-type':'application/x-www-form-urlencoded'
    });

    const body =new URLSearchParams();
    body.append("model", moto.model);
    body.append("cylinderCap", moto.cylinderCap);
    body.append("color", moto.color);

    return this.httpClient.post(this.endpoint, body.toString(), {headers})
  }

  delete(id: any){
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  update(id: any, data: any){
    return this.httpClient.put(`${this.endpoint}/${id}`,data);
  }
}
