import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './services/project.service';
// import { HomepageComponent } from './homepage/homepage.component';
import { AutthComponent } from './autth/autth.component';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  AuthService
} from 'angularx-social-login';
// import { HomepageComponent } from './homepage/homepage.component';
// import { config } from 'rxjs';

const googleAuthClientId =
  '349252575004-gdssfgcgp5hcov3d5co7t07tuuk8iuvr.apps.googleusercontent.com';

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
    // HomepageComponent,
    AutthComponent
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
