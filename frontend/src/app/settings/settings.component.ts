import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  onSettingsScreen = false;
  onLoginScreen = false;

  constructor() { }

  ngOnInit(): void {
  }

}
