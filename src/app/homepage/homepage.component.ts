import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private corsService: ProjectService) {}

  ngOnInit() {}

  onRetrieve() {
    this.corsService.getCors()
    .subscribe(data => {
      console.log(data);
    });
  }

  // onSubmit() {
  //   // () are public by default...so no need to specify if public
  //   // console.log(this.searchProjectForm.value.project_name);
  //   this.projectService
  //     .getProjectByName(this.searchProjectForm.value.project_name)
  //     .subscribe(
  //       // always subscribe
  //       data => {
  //         this.projectList = data; // store in var for display
  //         console.log(data); // don't concat with string
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     );
  // }
}
