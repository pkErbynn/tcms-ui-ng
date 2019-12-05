import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';

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

  feedback: string = "";

  constructor(private clientService: ClientService) { }

  ngOnInit() {}

  onSubmit(){
    this.clientService._postClient(this.clientRegisterForm.value).subscribe(data=> {
      console.log(data)
    })
    console.log(this.clientRegisterForm.value);
    this.feedback = "new client added successfully :) "
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
