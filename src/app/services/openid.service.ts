import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OpenidService {
  private url: string =
    "https://tranquil-plateau-91094.herokuapp.com/v1/api/ping";
  // private url: string = "http://192.168.8.136:8080/v1/api/ping";
  private authUrl: string =
    "https://tranquil-plateau-91094.herokuapp.com/v1/api/verifytoken";

  constructor(private http: HttpClient) {}

  getPong(idToken?: string): Observable<string> {
    console.log(" id token inside service  ", idToken);
    this._postTokenToVerify(idToken);
    return this.http.get(this.url, { responseType: "text" });
  }

  _postTokenToVerify(token: String) {
    // console.log(" id token inside postToken()  ", token);

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Token " + token
      })
    };

    // console.log("Inside postToken() >>>>> " + token);
    return this.http.post(this.authUrl, httpOptions);
  }
}
