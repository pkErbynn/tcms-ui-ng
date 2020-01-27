import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { HomepageComponent } from './homepage/homepage.component';
import { AutthComponent } from "./autth/autth.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { OauthComponent } from "./oauth/oauth.component";
import { LandComponent } from "./land/land.component";

const routes: Routes = [
  // { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: "home", component: HomepageComponent },
  { path: "auth", component: AutthComponent },
  { path: " ", component: AutthComponent },
  { path: "land", component: LandComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
