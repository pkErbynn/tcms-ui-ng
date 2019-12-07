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

  public projectDetails: Project;
  // id:number ;

  ngOnInit() {
    // this.id = this.projectDetails.project_id;
    this.showProjectDetails()
  }

  showProjectDetails(){
    return this.projectService.getProjects()
    .subscribe(data => {
      console.log(data[2])
      this.projectDetails = data[0];
      console.log(this.projectDetails.project_id)
    })
  }

}
