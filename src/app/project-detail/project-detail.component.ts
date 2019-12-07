import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  public projectDetail = [];

  ngOnInit() {
    this.showProjectDetails()
  }

  showProjectDetails(){
    
    return this.projectService.getProjects()
    .subscribe(data => {
      console.log(data)
      this.projectDetail = data;
      console.log(this.projectDetail)
    })
  }

}
