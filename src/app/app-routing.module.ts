import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ClientAddComponent } from "./client-add/client-add.component";
import { ClientDetailComponent } from "./client-detail/client-detail.component";
import { ProjectAddComponent } from "./project-add/project-add.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { HomepageComponent } from './homepage/homepage.component';
import { ClientTemplateComponent } from './client-template/client-template.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'client-list', component: ClientListComponent},
  {path: 'client-add', component: ClientAddComponent},
  {path: 'client-detail', component: ClientDetailComponent},
  {path: 'project-list', component: ProjectListComponent},
  {path: 'project-add', component: ProjectAddComponent},
  {path: 'project-detail', component: ProjectDetailComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'client-template', component: ClientTemplateComponent},
  // { path : '', redirectTo : 'users', pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
