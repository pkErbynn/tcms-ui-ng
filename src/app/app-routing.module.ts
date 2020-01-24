import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomepageComponent } from './homepage/homepage.component';
import { AutthComponent } from './autth/autth.component';
// import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  // {path: 'homepage', component: HomepageComponent},

  // { path: 'home', component: HomepageComponent },
  { path: 'auth', component: AutthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
