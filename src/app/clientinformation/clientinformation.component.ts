import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-clientinformation',
  templateUrl: './clientinformation.component.html',
  styleUrls: ['./clientinformation.component.css']
})
export class ClientinformationComponent implements OnInit {

  selectedRow : Number;
  setClickedRow : Function;
  clientinformation:[{
  clientName:string;
  contactNumber:string;
  caseNumber:string ;
}];

  constructor(private router:Router) { 
     this.clientinformation = [{
      clientName : "abcd trupti ",
      contactNumber: "12345",
      caseNumber: "10"
       },
     {
       clientName : "abcd trupti jhdjsahdjk hkjsfh",
       contactNumber: "123456789",
       caseNumber: "10"
        },
       {
       clientName : "abcd trupti jhdjsahdjk hkjsfh",
       contactNumber: "123456789",
       caseNumber: "10"
        },
       {
       clientName : "abcd trupti jhdjsahdjk hkjsfh",
       contactNumber: "123456789",
       caseNumber: "10"
        },
       {
       clientName : "abcd trupti jhdjsahdjk hkjsfh",
       contactNumber: "123456789",
       caseNumber: "10"
        },
       {
       clientName : "abcd trupti jhdjsahdjk hkjsfh",
       contactNumber: "123456789",
       caseNumber: "10"
        },
       {
       clientName : "abcd trupti jhdjsahdjk hkjsfh",
       contactNumber: "123456789",
       caseNumber: "10"
        },
       {
       clientName : "abcd trupti jhdjsahdjk hkjsfh",
       contactNumber: "123456789",
       caseNumber: "10"
        }
  ];

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
