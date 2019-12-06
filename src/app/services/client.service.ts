import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _url: string = "https://mysterious-peak-14776.herokuapp.com/customer"; 

  constructor(private _http: HttpClient) { }

  _getClients(): Observable<Client[]>{
    return this._http.get<Client[]>(this._url);
  }

  _postClient(client: Client): Observable<Client>{
    return this._http.post<Client>(this._url, client);
  }


}
