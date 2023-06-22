import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




declare var window: any



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  async onConnectMetamask() {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    }
    this.router.navigate(['/vote']);
  }






}
