import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import report from '../report';
import certificate from '../certificate';
import policy from '../policy';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  public medicalCauseOfDeaths = ['Heart Disease', 'Cancer', 'COVID-19', 'Accidents', 'Drowning'];
  public meansOfDeaths = ['Natural Cause', 'Accident', 'Homicide', 'Suicide', 'Undetermined'];
  public isLoading = false;
  public isSuccess = false;
  public isError = false;
  public reportStruct: any;
  public reportCount: any;
  public uri = 'https://gateway.pinata.cloud/ipfs/QmYLUQcq2YQLqijJK9i561Kpr8yFWm4o4zDGYupF3XvFZA';
  deathForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    sin: [''],
    dateOfDeath: [''],
    city: [''],
    province: [''],
    country: [''],
    postalCode: [''],
    medicalCauseOfDeaths: [''],
    meansOfDeaths: [''],
  });



  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  async ngAfterContentInit() {
    this.reportStruct = await report.methods.getReports().call();
    this.reportCount = await report.methods.getReportsCount().call();
 }

  onSubmit = async () => {
    // start disabled button loading spinner
    this.isLoading = true;


    // get policy by attruibute
    const getPolicyByAttribute_ = await policy.methods.getPolicyByAttribute(this.deathForm.value.firstName, this.deathForm.value.lastName, this.deathForm.value.sin).call();


    // get users ethereum address
    await (window as any).ethereum.enable();
    const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });



    // create death certificate report
    await report.methods.createReport(accounts[0], this.deathForm.value.firstName, this.deathForm.value.lastName, this.deathForm.value.sin, this.deathForm.value.dateOfDeath, this.deathForm.value.city, this.deathForm.value.postalCode, this.deathForm.value.country, this.deathForm.value.province, this.deathForm.value.medicalCauseOfDeaths, this.deathForm.value.meansOfDeaths).send({ from: accounts[0] });


    // mint SBT and display success/error banner
    for(var i = 0; i < getPolicyByAttribute_.beneficiaries.length; i++) {
      if (this.deathForm.controls['meansOfDeaths'].value != 'Undetermined') {
        const beneficiaryAddress = getPolicyByAttribute_.beneficiaries[i].recipient;

        await certificate.methods.safeMint(beneficiaryAddress, this.uri).send({ from: accounts[0] });

      } else {
        this.openErrorSnackBar();
      }
    }

    // success banner
    this.openSuccessSnackBar();

   

    // end disabled button loading spinner
    this.isLoading = false;

  }

  openSuccessSnackBar() {
    this.snackBar.open('Death certificate smart contract has been created, and Soulbound Tokens (SBTs) have been minted to the beneficiary.', 'OK', {
      duration: 15000,
      panelClass: ['green-snackbar', 'login-snackbar'],
    });
  }

  openErrorSnackBar() {
    this.snackBar.open('Soulbound Token (SBT) has not been sent to beneficiaries, as the Means of Death was Undetermined.', 'OK', {
      duration: 15000,
      panelClass: ['red-snackbar', 'login-snackbar'],
    });
  }


}
