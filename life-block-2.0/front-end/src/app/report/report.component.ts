import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import report from '../report';
import certificate from '../certificate';
import web3 from '../web3';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import policy from '../policy';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  public manager: any;
  public medicalCauseOfDeaths = ['Heart Disease', 'Cancer', 'COVID-19', 'Accidents', 'Drowning'];
  public meansOfDeaths = ['Natural Cause', 'Accident', 'Homicide', 'Suicide', 'Undetermined'];
  public isLoading = false;
  public isSuccess = false;
  public isError = false;
  public reportStruct: any;
  public reportCount: any;
  public beneficiaryAddress = '0x519b72B7E5658dD236E1ed55a687D9f1118d1a60' ;
  public uri = 'https://gateway.pinata.cloud/ipfs/QmayWkZY6fPvEMGDhheYdCjEC5kpXTTsUGw4jZEboYKpay';
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
    this.manager = await report.methods.manager().call();
    this.reportStruct = await report.methods.getReports().call();
    this.reportCount =  await report.methods.getReportsCount().call();

  }

  onSubmit = async () => {
    this.isLoading = true;
    await report.methods.createReport(this.manager, this.deathForm.value.firstName, this.deathForm.value.lastName, this.deathForm.value.sin, this.deathForm.value.dateOfDeath, this.deathForm.value.city, this.deathForm.value.postalCode, this.deathForm.value.country, this.deathForm.value.province, this.deathForm.value.medicalCauseOfDeaths, this.deathForm.value.meansOfDeaths).send({ from: this.manager });
    this.isLoading = false;

    if (this.deathForm.controls['meansOfDeaths'].value != 'Undetermined') {
      this.openSuccessSnackBar();
      await certificate.methods.safeMint(this.beneficiaryAddress, this.uri).send({ from: this.manager });
    } else {
      this.openErrorSnackBar();
    }

  }

  openSuccessSnackBar() {
    this.snackBar.open('Soulbound Token (SBT) has been sent to beneficiaries.', 'OK', {
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
