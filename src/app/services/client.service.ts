import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _url: string = "https://mysterious-peak-14776.herokuapp.com/customer"; 

  constructor(private _http: HttpClient) { }

  _getClients(){
    return this._http.get(this._url);
  }
}
