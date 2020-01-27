import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { SocialloginService } from "../services/sociallogin.service";
import {
  AuthService,
  GoogleLoginProvider,
  SocialUser,
  SocialLoginModule,
  AuthServiceConfig
} from "angularx-social-login";
import { Router } from "@angular/router";
// import { Socialusers } from "../models/socialUsers.component";

@Component({
  selector: "app-autth",
  templateUrl: "./autth.component.html",
  styleUrls: ["./autth.component.css"]
})
export class AutthComponent implements OnInit {
  response;
  // socialusers = new Socialusers();
  auth2: any;
  name: String;
  @ViewChild("loginRef", { static: true }) loginElement: ElementRef;

  email;

  // @ViewChild("loginRef", { static: true }) loginElement: ElementRef;

  user: SocialUser;
  loggedIn: boolean;

  constructor(
    public OAuth: AuthService,
    private SocialloginService: SocialloginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.OAuth.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = user != null;
      console.log(this.user);
    });
    this.googleSDK();
  }

  prepareLoginButton() {
    this.auth2.attachClickHandler(
      this.loginElement.nativeElement,
      {},
      googleUser => {
        let profile = googleUser.getBasicProfile();
        console.log("Token || " + googleUser.getAuthResponse().id_token);
        console.log("ID: " + profile.getId());
        console.log("Name: " + profile.getName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        this.name = profile.getName();
      },
      error => {
        alert(JSON.stringify(error, undefined, 2));
      }
    );
  }

  // signInWithGoogle(): void {
  //   this.OAuth.signIn(GoogleLoginProvider.PROVIDER_ID);
  //   console.log("inside google sign in fxn .......");
  // }

  googleSDK() {
    window["googleSDKLoaded"] = () => {
      window["gapi"].load("auth2", () => {
        this.auth2 = window["gapi"].auth2.init({
          client_id:
            "349252575004-gdssfgcgp5hcov3d5co7t07tuuk8iuvr.apps.googleusercontent.com",
          cookiepolicy: "single_host_origin",
          scope: "openid profile email"
        });
        this.prepareLoginButton();
      });
    };

    // tslint:disable-next-line: only-arrow-functions
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "google-jssdk");
  }

  // googleSDK() {
  //   window["googleSDKLoaded"] = () => {
  //     window["gapi"].load("auth2", () => {
  //       this.auth2 = window["gapi"].auth2.init({
  //         client_id:
  //           "859455735473-bgmqqco3q588kgaog0g2k0fmnur5qvf9.apps.googleusercontent.com",

  //         cookiepolicy: "single_host_origin",
  //         scope: "profile email openid"
  //       });
  //       this.prepareLoginButton();
  //     });
  //     {
  //     }
  //   };

  //   // tslint:disable-next-line: only-arrow-functions
  //   (function(d, s, id) {
  //     var js,
  //       fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) {
  //       return;
  //     }
  //     js = d.createElement(s);
  //     js.id = id;
  //     js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   })(document, "script", "google-jssdk");
  // }

  //// right
  public socialSignIn() {
    let socialPlatformProvider;
    // if (socialProvider === "google") {
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    // }
    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {
      // console.log("Id Token  |  ", socialusers.getAuthResponse().id_token);
      console.log("Email  |   ", socialusers.email);
      console.log("google", socialusers);
      console.log(socialusers);
      console.log("##################################");
      console.log(socialusers.name);
      console.log("##################################");

      // this.Savesresponse(this.socialusers);

      this.email = socialusers.email;
      console.log("Email >> ", this.email);
      let mail: String = this.email;
      let submail = mail.substr(-11);
      // this.domain = submail;
      console.log("Domain >> ", submail);
    });
  }

  // Savesresponse(socialusers: Socialusers) {
  //   this.SocialloginService.Savesresponse(socialusers).subscribe((res: any) => {
  //     debugger;
  //     console.log(res);
  //     this.socialusers = res;
  //     this.response = res.userDetail;
  //     this.name = res.name
  //     console.log("############");
  //     console.log(this.name)
  //     console.log("##########");
  //     localStorage.setItem("socialusers", JSON.stringify(this.socialusers));
  //     console.log(
  //       localStorage.setItem("socialusers", JSON.stringify(this.socialusers))
  //     );
  //     this.router.navigate(['/home']);
  //   });
  // }
}
