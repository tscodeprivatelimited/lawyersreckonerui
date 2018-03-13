import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Doughnut
  // public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData:number[] = [350, 450, 100];
  // public doughnutChartType:string = 'doughnut';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
 
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }
  
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

