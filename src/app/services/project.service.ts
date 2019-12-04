import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project'

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  private _url: string = "https://desolate-reaches-15540.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this._url);
  }
}
