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
    this.onStartup();
  }

  onStartup() {
    console.log("Init callback test");
    function count() {
      for (var i = 0; i < 5; ++i) {
        console.log(i)
      }
    }
    count();

    let anonymous = (x: number, y: number) => x + y;
    console.log("result: " + anonymous(5, 5))
  }

  onSubmit() {
    console.log(this.searchProjectForm.value.project_name);
    console.log("without project name: " + this.searchProjectForm.value);
    this.projectService.getProjectByName(this.searchProjectForm.value.project_name).subscribe(data => {
      console.log(data)
    })
  }

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
