import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  Routes, RouterModule } from '@angular/router'; //for routing
import { RESTService } from "./services/rest.service";
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { ServicesComponent } from './services/services.component';

import { userDetials } from "./services/userDetails";
import { DatePipe } from '@angular/common';
 import { Angular2FontawesomeModule  } from 'angular2-fontawesome/angular2-fontawesome';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    Angular2FontawesomeModule
  ],
  providers: [RESTService,userDetials],
  bootstrap: [AppComponent]
})
export class AppModule { }
