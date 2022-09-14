import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';



declare var window: any



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  async onConnectMetamask() {
    // console.log('Web3 version = ' + web3.version);
    // web3.eth.getAccounts().then(console.log);

    // const provider = await detectEthereumProvider()
    // console.log(provider);

    
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      // console.log(accounts);
    }
  }






}
