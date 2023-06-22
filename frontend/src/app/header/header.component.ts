import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  onSettingsScreen = false;
  onLoginScreen = false;
  @Input() title:string = '';
  @Output() ToggleValue = new EventEmitter();
  
  @HostBinding('class') className = '';

   toggleControl = new FormControl(false);

  constructor(private fb:FormBuilder) {
   }

  // get formValue():FormControl {
  //   return  this.form.get('ToggleBtn') as FormControl;
  // }

  ngOnInit(): void {
  
  this.toggleControl.valueChanges.subscribe(value =>{
    this.ToggleValue.emit(value);
    this.className = value ?'darkMode': '';
    // console.log("getting toggle value from hearder" , this.ToggleValue);
  })
  }

  onSettingsScreenClick() {
    this.onLoginScreen = false;
    this.onSettingsScreen = true;
  }

  onLoginScreenClick() {
    this.onSettingsScreen = false;
    this.onLoginScreen = true;
  }

}
