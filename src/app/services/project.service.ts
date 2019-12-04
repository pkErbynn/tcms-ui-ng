import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url: string = "https://desolate-reaches-15540.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getProjects(){
    return this.http.get(this.url);
  }
}
