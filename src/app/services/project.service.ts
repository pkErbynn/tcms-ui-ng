import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from "../interfaces/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url: string = "https://desolate-reaches-15540.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.url);
  }

  postProject(project: Project): Observable<Project>{
    return this.http.post<Project>(this.url + "project/add", project);
  }

  getProjectByName(name: string): Observable<Project[]>{
    // console.log(name)
    return this.http.get<Project[]>(this.url + "project/search/name/"+ name);   // be wary...this isn't a post
  }

  getProjectById(id: number): Observable<Project>{
    return this.http.get<Project>(this.url + "project/search/id/" + id);
  }

  // deleteProject(projectId: string):{
  //   return null;
  // }

  // updateProject(project: Project)
}
