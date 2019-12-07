import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../interfaces/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  public projectDetail: Project;
  // id:number ;


  ngOnInit() {
    this.getProjectDetailById()
  }

  getProjectDetailById(){
    return this.projectService.getProjectById(7)
    .subscribe(data => {
      console.log(data)
      this.projectDetail = data;
    })
  }

  // getAllProjectDetails(){
  //   return this.projectService.getProjects()
  //   .subscribe(data => {
  //     console.log("inside all project" + data)
  //     this.allProjectDetails = data;
  //     // console.log(this.allProjectDetails)
  //   })
  // }

}
