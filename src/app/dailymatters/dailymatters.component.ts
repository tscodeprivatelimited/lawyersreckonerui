import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dailymatters',
  templateUrl: './dailymatters.component.html',
  styleUrls: ['./dailymatters.component.css']
})
export class DailymattersComponent implements OnInit {


  selectedRow : Number;
  setClickedRow : Function;
dailymatters:[{
  court:string;
  caseNumber:string;
  clientName:string ;
  oppPartyName:string;
  prevDate:string;
  stage:string;
  nextDate:string ;
  nextStage:string
}];
 
  constructor(private router:Router) { 
      this.dailymatters = [{
         court : "court 1",
      caseNumber: "1234",
      clientName: "Client 1",
      oppPartyName: "Opp 1",
      prevDate: "01/01/2018",
      stage: "Stage 1",
      nextDate: "01/01/2018",
      nextStage: "Stage 2"
       },
  {

    court : "court 1",
    caseNumber: "1234",
    clientName: "Client 1",
    oppPartyName: "Opp 1",
    prevDate: "01/01/2018",
    stage: "Stage 1",
    nextDate: "01/01/2018",
    nextStage: "Stage 2"  },
  {

    court : "court 1",
    caseNumber: "1234",
    clientName: "Client 1",
    oppPartyName: "Opp 1",
    prevDate: "01/01/2018",
    stage: "Stage 1",
    nextDate: "01/01/2018",
    nextStage: "Stage 2"  },
  {

    court : "court 1",
    caseNumber: "1234",
    clientName: "Client 1",
    oppPartyName: "Opp 1",
    prevDate: "01/01/2018",
    stage: "Stage 1",
    nextDate: "01/01/2018",
    nextStage: "Stage 2"  },
  {

    court : "court 1",
    caseNumber: "1234",
    clientName: "Client 1",
    oppPartyName: "Opp 1",
    prevDate: "01/01/2018",
    stage: "Stage 1",
    nextDate: "01/01/2018",
    nextStage: "Stage 2" 
      }]
   this.setClickedRow = function(index){
      this.selectedRow = index;
  }
  }
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
