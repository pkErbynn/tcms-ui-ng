import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
// import { ProjectService } from './services/project.service';
// import { HomepageComponent } from './homepage/homepage.component';
import { AutthComponent } from "./autth/autth.component";

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  AuthService
} from "angularx-social-login";
import { OauthComponent } from "./oauth/oauth.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { LandComponent } from "./land/land.component";
import { OpenidService } from "./services/openid.service";
// import { HomepageComponent } from './homepage/homepage.component';
// import { config } from 'rxjs';

const googleAuthClientId =
  "859455735473-bgmqqco3q588kgaog0g2k0fmnur5qvf9.apps.googleusercontent.com";

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(googleAuthClientId)
  }
]);

export function provideConfig() {
  return config;
}

// export function socialConfigs() {

//   const config = new AuthServiceConfig([
//     {
//       id: GoogleLoginProvider.PROVIDER_ID,
//       provider: new GoogleLoginProvider(this.googleAuthClientId)
//     }
//   ]);

//   return config;
// }

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AutthComponent,
    OauthComponent,
    HomepageComponent,
    LandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    OpenidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
