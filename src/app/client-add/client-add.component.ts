import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {
  clientRegisterForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl(''),
    address: new FormControl(''),
  });
  // name = new FormControl('');
  // registerClientForm: FormGroup;
  // submitted = false;

  constructor(/*private formBuilder: FormBuilder*/) { }

  ngOnInit() {
    // this.registerClientForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   telephone: ['', Validators.required],
    //   address: ['', Validators.required]
    // });
  }

  //  onSubmit() {
  //       this.submitted = true;

  //       // stop here if form is invalid
  //       if (this.registerClientForm.invalid) {
  //           return;
  //       }

  //       // display form values on success
  //       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerClientForm.value, null, 4));
  //   }


  //   onReset() {
  //     this.submitted = false;
  //     this.registerClientForm.reset();
  // }

}
