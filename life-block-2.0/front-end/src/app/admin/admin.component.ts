import { Component, OnInit } from '@angular/core';
import report from '../report';
import certificate from '../certificate';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public manager: any;
  personCount = '';
  people: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.handlePeople();
  }

  async ngAfterContentInit() {
    try{
      this.manager = await report.methods.manager().call();
      // console.log(certificate);
    }
    catch(error){
      console.log(error)
    }
    // this.manager = await report.methods.manager().call();
    // console.log(certificate);

  }
  

  async handlePeople() {
    try{
      let personCount = await report.methods.getReportsCount().call();
      this.personCount = personCount;
  
      for (let index = 0; index < personCount; index++) {
        const element = this.people[index];
        const person = await report.methods.getReports().call();
        this.people.push(person[index]);
      }
      
      // console.log(this.people);
    }
    catch(error){
      console.log(error)
    }
    // let personCount = await report.methods.getReportsCount().call();
    // this.personCount = personCount;

    // for (let index = 0; index < personCount; index++) {
    //   const element = this.people[index];
    //   const person = await report.methods.getReports().call();
    //   this.people.push(person[index]);
    // }
    
    // console.log(this.people);
  }

  async onApprove() {

  }

}