import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../interfaces/project'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  public projectList = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects()
    .subscribe(data => {
      this.projectList = data;
      console.log(data);
    })
  }


  // projectList2 = [
  //   {
  //     project_id: 1,
  //     project_name: "hone",
  //     description: "working"
  //   }
  //  ]

}
