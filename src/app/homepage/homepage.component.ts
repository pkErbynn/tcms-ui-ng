import { Component, OnInit, ElementRef, Input } from "@angular/core";
// import { ProjectService } from "../services/project.service";
// import { Socialusers } from "../models/socialUsers.component";
import { AuthService } from "angularx-social-login";
import { Router } from "@angular/router";
import { OpenidService } from "../services/openid.service";
// @ViewChild('loginRef', {static: true }) loginElement: ElementRef;

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit {
  // socialusers = new Socialusers();
  response;
  responses = [];
  hd;

  @Input()
  hostDomain;

  constructor(
    // private corsService: ProjectService,
    public OAuth: AuthService,
    private router: Router,
    private oidService: OpenidService
  ) {}

  ngOnInit() {
    console.log("Hostname inside homepage onInit >>> ", this.hostDomain);
  }

  onRequest() {
    this.oidService.getPong().subscribe(resp => {
      console.log(resp);
      this.response = resp;
      // console.log("Inside subscribe >>> ", this.response);
      this.responses.push(resp);
      console.log("response >>>> ", this.response);
    });
    console.log("Outside response >>> ", this.response);

    console.log("Hostname inside homepage >>> ", this.hostDomain);
  }

  // receiveDomain($event) {
  //   debugger;
  //   this.hd = $event;
  // }

  // logout() {
  //   this.OAuth.signOut().then(data => {
  //     this.router.navigate(['/auth']);
  //   });
  // }

  // onRetrieve() {
  //   this.corsService.getCors().subscribe(data => {
  //     console.log(data);
  //   });
  // }

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
