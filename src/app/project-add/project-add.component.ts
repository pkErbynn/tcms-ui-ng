import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  projectRegisterForm = new FormGroup({
    project_name: new FormControl(''),    // form control name must much that of db
    description: new FormControl(''),
  });
  feedback: string = "";

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.projectRegisterForm.value);
    this.projectService.postProject(this.projectRegisterForm.value).subscribe(data => {
      console.log(data);
    })
    this.feedback = "new project added successfully :)"
  }

}
