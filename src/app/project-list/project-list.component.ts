import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  public projectList = []

  searchProjectForm = new FormGroup({
    project_name: new FormControl('')
  });

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(data => {
      this.projectList = data;
      console.log(data)
    });
    // this.onStartup();
  }

  onSubmit() {
    // console.log(this.searchProjectForm.value.project_name);
    this.projectService.getProjectByName(this.searchProjectForm.value.project_name).subscribe(data => {   // always subscribe
      this.projectList = data;    // store in var for display
      console.log(data)   // don't concat with string
    })
  }



  // onStartup() {
  //   console.log("Init callback test");
  //   function count() {
  //     for (var i = 0; i < 5; ++i) {
  //       console.log(i)
  //     }
  //   }
  //   count();

  //   let anonymous = (x: number, y: number) => x + y;
  //   console.log("result: " + anonymous(5, 5))
  // }


  // projectList2 = [
  //   {
  //     project_id: 1,
  //     project_name: "hone",
  //     description: "working"
  //   },
  // {
    //     project_id: 1,
    //     project_name: "hone",
    //     description: "working"
    //   }
  //  ]



}
