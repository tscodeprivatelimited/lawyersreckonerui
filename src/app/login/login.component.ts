import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {  NgForm }  from  '@angular/forms'; 
import { RESTService  } from "../services/rest.service";
import { AppComponent } from "../app.component";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private appCompo :AppComponent) { }

  ngOnInit() {
  }
  
  openBody(){
  this.appCompo.showBody();
  } 

}
