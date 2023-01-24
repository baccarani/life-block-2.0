import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PolicyModalComponent } from '../policy-modal/policy-modal.component';
import { FormService } from '../services/form-services';


@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  public isLoading = false;
  PolicyFromData:any;

  policyForm = this.formBuilder.group({
    firstName:[''],
    lastName:[''],
    sin:[''],
    dateOfBirth:[''],
    streetAddress:[''],
    city:[''],
    province:[''],
    country:[''],
    postalCode:[''],
    emailAddress:[''],
    initialPremiumPayment:[''],
      });

  constructor(private formBuilder: FormBuilder, private matDialogModule: MatDialog, private service:FormService) { }

  ngOnInit(): void {
    this.matDialogModule.open(PolicyModalComponent);
  }

  onHomePage() {
    
  }

  onSubmit() {
     this.PolicyFromData = this.policyForm.value;
    this.service.getfromOne(this.PolicyFromData);
  }

}
