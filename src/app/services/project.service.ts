import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Project } from "../interfaces/project";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  private url: String =
    "http://localhost:8080/v1/api/availableEmployees?endDate=2020-04-10&startDate=2020-04-20";

  constructor(private http: HttpClient) {}

  // getProjectById(id: number): Observable<Project>{
  //   return this.http.get<Project>(this.url + "project/search/id/" + id);
  // }

  // getCors() {
  //   return this.http.get(
  //     'https://timeui.herokuapp.com/v1/api/availableEmployees?endDate=2020-04-20&startDate=2020-04-10'
  //   );
  // }
}
