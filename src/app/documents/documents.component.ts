import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  selectedRow : Number;
  setClickedRow : Function;
  documents:[{
  srNumber:string;
  documentName:string;
}];
  constructor(private router:Router) {
     this.documents = [{
      srNumber : "1",
      documentName: "abcdgg",
       },
  {
      srNumber : "1",
      documentName: "abcdgg", },
  {
      srNumber : "1",
      documentName: "abcdgg",  },
  {
      srNumber : "1",
      documentName: "abcdgg",  }];
  
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
