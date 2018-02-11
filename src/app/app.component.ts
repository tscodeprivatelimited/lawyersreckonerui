import { Component } from '@angular/core';
import { loginSession } from "./services/loginSession";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showbody:boolean =false;
  showlogin:boolean =false;

  constructor(private loginsession:loginSession) { }

  ngOnInit() {
    if (this.loginsession.getSession()) {
          this.showlogin=false;
    this.showbody =true;
}else{
    this.showlogin=true;
    this.showbody =false;
 
}
  }

  // showLogin(){
  //   this.showlogin=true;
  //   this.showbody =false;
  // }

  showBody(){
    this.showlogin=false;
    this.showbody =true;
  }
}
