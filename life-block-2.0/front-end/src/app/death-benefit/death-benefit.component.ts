import { Component, NgZone, OnInit } from '@angular/core';
import certificate from '../certificate';
import policy from '../policy';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';


@Component({
  selector: 'app-death-benefit',
  templateUrl: './death-benefit.component.html',
  styleUrls: ['./death-benefit.component.css']
})
export class DeathBenefitComponent implements OnInit {
  public isSuccess = false;
  public isLoading = false;
  public manager: any;
  public burnCounter: any;
  public policyWalletAddress: any = '0xF93224494442A31DB3b493b5F08D09A1B18Ac652';

  private animation!: AnimationItem;


  constructor(private snackBar: MatSnackBar, private ngZone: NgZone) { }

  async ngOnInit() {
    this.burnCounter = await certificate.methods.count().call();
    this.burnCounter--
  }


options:AnimationOptions = {
  path:'../../assets/img/confetti.json'
}


created(animation:AnimationItem) {
  this.animation = animation;
}


  async onRedeemDeathBenefitPayment() {

    // declare audio variables
    let audioFireWorks = new Audio();
    audioFireWorks.src = '../../assets/img/fireworks.mp3';
    
    // // start loading spinner
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


    // pay beneficiaries
    await policy.methods.withdrawAll(this.policyWalletAddress).send({ from: accounts[0] });


    // end loading spinner
    this.isLoading = false;

    // display success message
    this.openSuccessSnackBar();

    // display lottie animation confetti
    this.isSuccess = true;

    // play audio sounds
    audioFireWorks.load();
    audioFireWorks.play();

    setTimeout(()=>{                           
      audioFireWorks.pause();
      audioFireWorks.currentTime = 0;
  }, 25000);
    
  }

  openSuccessSnackBar() {
    this.snackBar.open('Soulbound Token (SBT) has been burned, and death benefit payment has been sent to the beneficiary / beneficiaries.', 'OK', {
      duration: 15000,
      panelClass: ['green-snackbar', 'login-snackbar'],
     });
  }

}


