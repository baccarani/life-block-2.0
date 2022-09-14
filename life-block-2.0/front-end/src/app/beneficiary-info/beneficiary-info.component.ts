import { Input, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { Beneficiary } from '../models/beneficiary';
import { FormService } from '../services/form-services';

@Component({
  selector: 'beneficiary-info',
  templateUrl: './beneficiary-info.component.html',
  styleUrls: ['./beneficiary-info.component.css']
})
export class BeneficiaryInfoComponent implements OnInit, OnChanges {

  @Input() index: number = 0;
  @Input() allocation: number | null = 0;
  @Input() beneficiary: Beneficiary = {
    firstName: '',
    lastName: '',
    walletAddress: '',
    allocation: 0
  };
  beneficiaryFormValue:any=[];
  @Input() showEdit: boolean = false;

  @Output() beneficiaryUpdate = new EventEmitter();
  @Output() editUpdate = new EventEmitter();
  @Output() deleteUpdate = new EventEmitter();

  beneficiaryForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    walletAddress: [''],
    allocation: [0]
  });

  constructor(private formBuilder: FormBuilder, private service:FormService) { }

  ngOnInit(): void {
    this.beneficiaryForm.setValue({ firstName: this.beneficiary.firstName, lastName: this.beneficiary.lastName, walletAddress: this.beneficiary.walletAddress, allocation: this.beneficiary.allocation });
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  onSubmit(): void {
    this.showEdit = true;
    this.beneficiaryUpdate.emit({ value: this.beneficiaryForm.value, index: this.index });
    this.beneficiaryFormValue = this.beneficiaryForm.value;
    this.service.getfromTwo(this.beneficiaryFormValue);
   
  }

  editClicked(): void {
    this.showEdit = false;
    this.editUpdate.emit({value: false, index: this.index});
  }

  deleteClicked(): void {
    console.log(this.index);
    this.deleteUpdate.emit(this.index);
  }

  allocationUpdate(event: MatSliderChange): void {
    this.allocation = event.value;
  }

}
