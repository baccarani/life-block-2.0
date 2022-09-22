import { Component, OnInit } from '@angular/core';
import { Beneficiary } from '../models/beneficiary';
import policy from '../policy';
import { FormService } from '../services/form-services';
import web3 from '../web3';
import { MatSnackBar } from '@angular/material/snack-bar';
const BN = require('bn.js');


@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent implements OnInit {
  public isLoading = false;
  beneficiaries: Beneficiary[] = [];
  showEdit: boolean[] = [];
  constructor(private service: FormService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.beneficiaries = [{ firstName: "", lastName: "", walletAddress: "", allocation: 0 }];
    this.showEdit.push(false);
  }

  beneficiaryUpdate(form: any): void {
    this.showEdit[form.index] = true;
    this.beneficiaries[form.index] = form.value;
    // console.log(this.beneficiaries);
  }

  editUpdate(update: any): void {
    this.showEdit[update.index] = update.value;
  }

  deleteUpdate(update: any): void {
    let tempBeneficiaries: Beneficiary[] = [];
    for (let i = 0; i < this.beneficiaries.length; i++) {
      if (i !== update) {
        tempBeneficiaries.push(this.beneficiaries[i]);
      }
    }
    this.beneficiaries = tempBeneficiaries;

    let tempEdit: boolean[] = [];
    for (let i = 0; i < this.showEdit.length; i++) {
      if (i !== update) {
        tempEdit.push(this.showEdit[i]);
      }
    }
    this.showEdit = tempEdit;
  }

  addClicked(): void {
    if (this.allocationTotal() < 100) {
      this.beneficiaries.push({ firstName: "", lastName: "", walletAddress: "", allocation: 0 });
      this.showEdit.push(false);
    }
  }

  allocationTotal(): number {
    return this.beneficiaries.map(b => b.allocation).reduce((a, b) => a + b, 0);
  }

  async onSubmit() {
    // start disabled button loading spinner
    this.isLoading = true;

    // initialize variables
    let form: any[] = this.service.getFormValue();
    let policyInfo: any = form[0][0];
    let beneficiaryInfo: any[] = form[1];
    let stringArgs: string[] = [];
    let numberArgs: number[] = [];
    let addressArgs: string[] = [];

    // add string arguments coming from the policy information
    stringArgs.push(policyInfo.city);
    stringArgs.push(policyInfo.country);
    stringArgs.push(policyInfo.dateOfBirth.toLocaleString());
    stringArgs.push(policyInfo.emailAddress);
    stringArgs.push(policyInfo.firstName);
    stringArgs.push(policyInfo.lastName);
    stringArgs.push(policyInfo.postalCode);
    stringArgs.push(policyInfo.province);
    stringArgs.push(policyInfo.sin);
    stringArgs.push(policyInfo.streetAddress);

    // add initial premium payment coming from the policy form
    numberArgs.push(new BN(web3.utils.toWei(policyInfo.initialPremiumPayment)));

    // add string and number arguments coming from the beneficiary info
    for (let i = 0; i < beneficiaryInfo.length; i++) {
      stringArgs.push(beneficiaryInfo[i].firstName);
      stringArgs.push(beneficiaryInfo[i].lastName);
      addressArgs.push(beneficiaryInfo[i].walletAddress);
      numberArgs.push(beneficiaryInfo[i].allocation);
    }

    // get users ethereum address
    await (window as any).ethereum.enable();
    const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });

    // enter ether into policy smart contract and create smart contract policy
    await policy.methods.enter().send({ from: accounts[0], value: web3.utils.toWei(policyInfo.initialPremiumPayment) }, async function (err: any, res: any) {
      if (err) {
        console.log("an error occured while depositing funds.");
        return
      } else {
        await policy.methods.createPolicy(stringArgs, numberArgs, addressArgs).send({ from: accounts[0] }, function (err: any, res: any) {
          if (err) {
            console.log("An error occured", err)
            return
          }
          console.log("Hash of the transaction: " + res)
        });
      }
    });

    // display success message
    this.openSuccessSnackBar();


    // end disabled button loading spinner
    this.isLoading = false;

  }



  openSuccessSnackBar() {
    this.snackBar.open('Initial premium payment has been entered, life insurance smart contract policy has been created.', 'OK', {
      duration: 15000,
      panelClass: ['green-snackbar', 'login-snackbar'],
    });
  }

  openErrorSnackBar() {
    this.snackBar.open('Error.', 'OK', {
      duration: 15000,
      panelClass: ['red-snackbar', 'login-snackbar'],
    });
  }

}
