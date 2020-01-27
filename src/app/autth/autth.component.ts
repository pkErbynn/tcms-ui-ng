import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { SocialloginService } from "../services/sociallogin.service";
import {
  AuthService,
  GoogleLoginProvider,
  SocialUser,
  SocialLoginModule,
  AuthServiceConfig
} from "angularx-social-login";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Socialusers } from "../models/socialUsers.component";

@Component({
  selector: "app-autth",
  templateUrl: "./autth.component.html",
  styleUrls: ["./autth.component.css"]
})
export class AutthComponent implements OnInit {
  response;
  socialusers = new Socialusers();
  auth2: any;
  name;
  token;
  isPreparedFinishLoading: Boolean = false;
  domain;

  email;

  @ViewChild("loginRef", { static: true }) loginElement: ElementRef;

  user: SocialUser;
  loggedIn: boolean;

  constructor(
    public OAuth: AuthService,
    private SocialloginService: SocialloginService,
    private router: Router
  ) {}

  ngOnInit() {}

  // ngOnInit() {
  //   this.OAuth.authState.subscribe(user => {
  //     this.user = user;
  //     this.loggedIn = user != null;
  //     console.log(this.user);
  //     this.name = this.user.firstName;
  //     console.log("#########");
  //     console.log(this.name);
  //     console.log("#########");
  //   });
  //   this.googleSDK();

  // console.log("######"  +
  //   JSON.stringify(
  //     this.auth2.init()
  //       .getAuthInstance()
  //       .currentUser.get()
  //       .getAuthResponse(true)
  //   )
  // );
  // }

  // prepareLoginButton() {
  //   this.auth2.attachClickHandler(
  //     this.loginElement.nativeElement,
  //     {},
  //     googleUser => {
  //       let profile = googleUser.getBasicProfile();
  //       console.log("Token || " + googleUser.getAuthResponse().id_token);
  //       console.log("ID: " + profile.getId());
  //       console.log("Name: " + profile.getName());
  //       console.log("Image URL: " + profile.getImageUrl());
  //       console.log("Email: " + profile.getEmail());
  //     },
  //     error => {
  //       alert(JSON.stringify(error, undefined, 2));
  //     }
  //   );
  //   this.isPreparedFinishLoading = true;
  //   console.log("finished loadin......");
  // }

  // signInWithGoogle(): void {
  //   this.OAuth.signIn(GoogleLoginProvider.PROVIDER_ID);
  //   console.log("inside google sign in fxn .......");
  // }

  //   const apiKey = 'my_key';
  // gapi.load('auth2', () => {
  //   gapi.auth2.init({
  //     client_id: apiKey, // note "client_id", not "apiKey"
  //     hosted_domain: 'my_domain'
  //   }).then(auth2 => { // wait for initialisation
  //     if (!auth2.isSignedIn.get()) { // check if already signed in
  //       auth2.signIn().then(...)
  //     }
  //   })
  // })

  // googleSDK() {
  //   window["googleSDKLoaded"] = () => {
  //     window["gapi"].load("auth2", () => {
  //       this.auth2 = window["gapi"].auth2.init({
  //         client_id:
  //           "349252575004-gdssfgcgp5hcov3d5co7t07tuuk8iuvr.apps.googleusercontent.com",

  //         cookiepolicy: "single_host_origin",
  //         scope: "profile email openid"
  //       });
  //       this.prepareLoginButton();
  //     });
  //     {
  //     }
  //   };

  // tslint:disable-next-line: only-arrow-functions
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

  public socialSignIn() {
    let socialPlatformProvider;
    // if (socialProvider === "google") {
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    // }
    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {
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
      this.domain = submail;
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
