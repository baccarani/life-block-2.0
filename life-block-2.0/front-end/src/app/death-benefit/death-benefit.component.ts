import { Component, OnInit } from '@angular/core';
import certificate from '../certificate';
import policy from '../policy';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-death-benefit',
  templateUrl: './death-benefit.component.html',
  styleUrls: ['./death-benefit.component.css']
})
export class DeathBenefitComponent implements OnInit {
  public isLoading = false;
  public manager: any;


  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  async onRedeemDeathBenefitPayment() {
    // start loading spinner
    this.isLoading = true;

    // get users ethereum address
    await (window as any).ethereum.enable();
    const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });


    // burn SBT
    await certificate.methods.burn(2).send({ from: accounts[0] }, function (err: any, res: any) {
      if (err) {
        console.log("An error occured", err)
        return
      }
      console.log("Hash of the transaction: " + res)
    });


    // pay beneficiaries
    await policy.methods.withdrawAll('0x519b72B7E5658dD236E1ed55a687D9f1118d1a60').send({ from: accounts[0] });


    // end loading spinner
    this.isLoading = false;

    // display success message
    this.openSuccessSnackBar();
    
  }

  openSuccessSnackBar() {
    this.snackBar.open('Soulbound Token (SBT) has been burned, and death benefit payment has been sent to beneficiaries.', 'OK', {
      duration: 15000,
      panelClass: ['green-snackbar', 'login-snackbar'],
     });
  }

}


