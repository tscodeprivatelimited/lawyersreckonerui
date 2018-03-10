import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RESTService  } from "../services/rest.service";
import { userDetials  } from "../services/userDetails";
import { DatePipe } from '@angular/common';
import { AppComponent } from "../app.component";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 today: number = Date.now();
  constructor(private appCompo:AppComponent,public router : Router,private userDetials:userDetials,private rest :RESTService) { }
userName:String="";
  ngOnInit( ) {
     this.userName=this.userDetials.getUserName();
  }
    signout(){
  //Navigate to Home page
     this.router.navigate(["/login"]);
      // this.appCompo.showLogin();
}
openHome(){
    this.router.navigate(['/home']);    
  }

}
