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

  projectDetail: Project;
  projectId: string ;
  // projectList: Project[];
  // project: Project = this.projectList[0];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('id'); // grabs the dynamic path para values, string by default 
      // console.log(this.projectId)
    });
    this.getProjectDetailById(+this.projectId);

    // this.projectService.getProjects().subscribe(
    //   data => {
    //     this.projectList = data;
    //     console.log("here..." + data)
    //   });

    //   this.route.paramMap.subscribe(params => {
    //     this.projectList.forEach((p: Project) => {
    //       if (p.project_id == params.get('id')) {
    //         this.project = p;
    //         console.log("works..." + this.project)

    //       }
    //     });
    //     console.log("works..." + this.project)
    //   });
  }

  getProjectDetailById(pId: number){
    return this.projectService.getProjectById(pId)
    .subscribe(data => {
      console.log(data)
      this.projectDetail = data;
    })
  }

}
