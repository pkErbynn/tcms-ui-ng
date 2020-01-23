import { Component, OnInit } from '@angular/core';
import { SocialloginService } from '../services/sociallogin.service';
import {
  AuthService,
  GoogleLoginProvider,
  SocialUser,
  SocialLoginModule,
  AuthServiceConfig
} from 'angularx-social-login';
import { Router } from '@angular/router';
import { Socialusers } from '../models/socialUsers.component';

@Component({
  selector: 'app-autth',
  templateUrl: './autth.component.html',
  styleUrls: ['./autth.component.css']
})
export class AutthComponent implements OnInit {
  // response;
  // socialusers = new Socialusers();

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
  }

  signInWithGoogle(): void {
    this.OAuth.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log('inside google sign in fxn .......')
  }

  // public socialSignIn(socialProvider: string) {
  //   let socialPlatformProvider;
  //   if (socialProvider === "google") {
  //     socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  //   }
  //   this.OAuth.signIn(socialPlatformProvider).then(socialusers => {
  //     console.log(socialProvider, socialusers);
  //     console.log(socialusers);
  //     this.Savesresponse(this.socialusers);
  //   });
  // }

  // Savesresponse(socialusers: Socialusers) {
  //   this.SocialloginService.Savesresponse(socialusers).subscribe((res: any) => {
  //     debugger;
  //     console.log(res);
  //     this.socialusers = res;
  //     this.response = res.userDetail;
  //     localStorage.setItem("socialusers", JSON.stringify(this.socialusers));
  //     console.log(
  //       localStorage.setItem("socialusers", JSON.stringify(this.socialusers))
  //     );
  //     this.router.navigate([`/home`]);
  //   });
  // }
}
