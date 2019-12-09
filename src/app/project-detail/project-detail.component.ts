import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../interfaces/project';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  projectDetail: Project;
  projectId: number;

  ngOnInit() {
    // this.projectId = this.route.snapshot.params['id'];
    this.route.paramMap.subscribe((params: ParamMap) => {    // alt
      this.projectId = parseInt(params.get('id')); // grabs the dynamic path para values, string by default 
      // console.log(this.projectId)
    });

    this.getProjectDetailById(+this.projectId);   // number casting with + 

    console.log("inside onInit..." + this.projectDetail)
    console.log("inside onInit id..." + this.projectId)
  }



  getProjectDetailById(pId: number) {
    return this.projectService.getProjectById(pId)
      .subscribe(data => {
        console.log(data)
        this.projectDetail = data;
        console.log(this.projectDetail)
      });
  }
}