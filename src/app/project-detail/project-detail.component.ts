import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../interfaces/project';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  public projectDetail: Project;
  id: string ;


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id)
    });
    console.log("here...." + this.id)
    let castId = +this.id // number casting
    this.getProjectDetailById(7);
  }

  getProjectDetailById(pId: number){
    return this.projectService.getProjectById(pId)
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
