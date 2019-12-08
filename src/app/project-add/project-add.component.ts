import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router, private formBuilder: FormBuilder) { }

  // projectRegisterForm = new FormGroup({
  //   project_name: new FormControl(''),    // form control name must much that of db
  //   description: new FormControl(''),
  // });

  projectRegisterForm = this.formBuilder.group({
    project_name: ['', [Validators.required, Validators.minLength(3)]],
    // project_name: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(5)]]
  });

  get projectName(){
    return this.projectRegisterForm.get('project_name');
  }

  get projectDescription(){
    return this.projectRegisterForm.get('description')
  }
  // feedback: string = "";


  ngOnInit() {
  }

  onSubmit(){   
    console.log(this.projectRegisterForm.value);
    this.projectService.postProject(this.projectRegisterForm.value).subscribe(data => {
      console.log("works!", data);
      alert('New project added successfully :)');
      this.router.navigate(['project-list']);
    })
    // this.feedback = "new project added successfully :)"

  }

}
