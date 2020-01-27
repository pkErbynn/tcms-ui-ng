import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OpenidService {
  private url: string =
    "https://tranquil-plateau-91094.herokuapp.com/v1/api/ping";
  // private url: string = "http://192.168.8.136:8080/v1/api/ping";

  constructor(private http: HttpClient) {}

  getPong(): Observable<string> {
    return this.http.get(this.url, { responseType: "text" });
  }
}
