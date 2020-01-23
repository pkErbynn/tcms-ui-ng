// import { Component, OnInit, ElementRef } from '@angular/core';
// import { ProjectService } from '../services/project.service';
// import { Socialusers } from '../models/socialUsers.component';
// import { AuthService } from 'angularx-social-login';
// import { Router } from '@angular/router';
// // @ViewChild('loginRef', {static: true }) loginElement: ElementRef;

// @Component({
//   selector: "app-homepage",
//   templateUrl: "./homepage.component.html",
//   styleUrls: ["./homepage.component.css"]
// })
// export class HomepageComponent implements OnInit {
//   socialusers = new Socialusers();

//   constructor(
//     private corsService: ProjectService,
//     public OAuth: AuthService,
//     private router: Router
//   ) {}

//   ngOnInit() {
//     this.socialusers = JSON.parse(localStorage.getItem("socialusers"));
//     // console.log(this.socialusers.image);
//   }

//   logout() {
//     this.OAuth.signOut().then(data => {
//       debugger;
//       this.router.navigate(['/auth']);
//     });
//   }

//   onRetrieve() {
//     this.corsService.getCors().subscribe(data => {
//       console.log(data);
//     });
//   }

//   // onSubmit() {
//   //   // () are public by default...so no need to specify if public
//   //   // console.log(this.searchProjectForm.value.project_name);
//   //   this.projectService
//   //     .getProjectByName(this.searchProjectForm.value.project_name)
//   //     .subscribe(
//   //       // always subscribe
//   //       data => {
//   //         this.projectList = data; // store in var for display
//   //         console.log(data); // don't concat with string
//   //       },
//   //       error => {
//   //         console.log(error);
//   //       }
//   //     );
//   // }
// }
