import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '../services/header-title.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  onSettingsScreen = false;
  onLoginScreen = false;

  constructor(private headerTitleService: HeaderTitleService) { }

  ngOnInit(): void {
  }

  onLoginScreenClick() {
    // this.headerTitleService.onSettingsScreen = false;
    // this.headerTitleService.onLoginScreen = true;

    this.headerTitleService.nextMessage(this.onLoginScreen)
  }

}
