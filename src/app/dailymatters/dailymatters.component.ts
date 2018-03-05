import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dailymatters',
  templateUrl: './dailymatters.component.html',
  styleUrls: ['./dailymatters.component.css']
})
export class DailymattersComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  toHome(){
    this.router.navigate(['/home']);    
  }

  openDailyMatters(){
this.router.navigate(['/dailymatters']);
  }

  openCases(){
    this.router.navigate(['/cases']);

  }
  openClientInfo(){
    this.router.navigate(['/clientinformation']);

  }
  openDocument(){
    this.router.navigate(['/documents']);

  }
  openReport(){
    this.router.navigate(['/reports']);

  }
  
  openSetting(){
    this.router.navigate(['/dailymatters']);

  }  
  openHelp(){
    this.router.navigate(['/dailymatters']);
  }

}
