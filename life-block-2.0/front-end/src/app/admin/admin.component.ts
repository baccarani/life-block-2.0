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
  public beneficiaryAddress = '0x519b72B7E5658dD236E1ed55a687D9f1118d1a60' ;
  public uri = 'https://gateway.pinata.cloud/ipfs/QmayWkZY6fPvEMGDhheYdCjEC5kpXTTsUGw4jZEboYKpay'
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
    await certificate.methods.safeMint(this.beneficiaryAddress, this.uri).send({ from: this.manager });

  }

}