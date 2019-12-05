import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url: string = "https://desolate-reaches-15540.herokuapp.com/";
  private addUrl: string = "https://desolate-reaches-15540.herokuapp.com/project/add";

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.url);
  }

  postProject(project: Project): Observable<Project>{
    return this.http.post<Project>(this.addUrl, project);
  }
}
