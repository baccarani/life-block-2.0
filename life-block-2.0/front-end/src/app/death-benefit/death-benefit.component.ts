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
  public burnCounter: number = 12;


  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // console.log(this.burnCounter)
  }

  async onRedeemDeathBenefitPayment() {

    
    // start loading spinner
    this.isLoading = true;

    // get users ethereum address
    await (window as any).ethereum.enable();
    const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });


    // burn SBT
    await certificate.methods.burn(this.burnCounter).send({ from: accounts[0] }, function (err: any, res: any) {
      if (err) {
        console.log("An error occured", err)
        return
      }
      console.log("Hash of the transaction: " + res)
    });

    // update burnCounter
    // this.burnCounter = this.burnCounter + 1;


    // pay beneficiaries
    await policy.methods.withdrawAll('0xF93224494442A31DB3b493b5F08D09A1B18Ac652').send({ from: accounts[0] });


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


