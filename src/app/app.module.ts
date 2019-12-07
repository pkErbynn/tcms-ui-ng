import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ClientTemplateComponent } from './client-template/client-template.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client.service';
import { ProjectService } from './services/project.service';


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ProjectListComponent,
    ClientAddComponent,
    ClientDetailComponent,
    ProjectDetailComponent,
    ProjectAddComponent,
    HomepageComponent,
    ClientTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ClientService,
    ProjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
