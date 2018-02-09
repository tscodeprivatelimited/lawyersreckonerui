import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showbody:boolean =false;
  showlogin:boolean =true;


  showLogin(){
    this.showlogin=true;
    this.showbody =false;
  }

  showBody(){
    this.showlogin=false;
    this.showbody =true;
  }
}
