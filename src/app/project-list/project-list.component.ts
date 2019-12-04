import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  projectList2 = [
    {
      project_id: 1,
      project_name: "hone",
      description: "working"
    }
   ]


}
