import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ClientAddComponent } from "./client-add/client-add.component";
import { ClientDetailComponent } from "./client-detail/client-detail.component";
import { ProjectAddComponent } from "./project-add/project-add.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";

const routes: Routes = [
  {path: 'client-list', component: ClientListComponent},
  {path: 'client-add', component: ClientAddComponent},
  {path: 'client-detail', component: ClientDetailComponent},
  {path: 'project-list', component: ProjectListComponent},
  {path: 'project-add', component: ProjectAddComponent},
  {path: 'project-detail', component: ProjectDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
