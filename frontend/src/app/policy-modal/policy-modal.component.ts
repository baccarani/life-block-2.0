import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-policy-modal',
  templateUrl: './policy-modal.component.html',
  styleUrls: ['./policy-modal.component.css']
})
export class PolicyModalComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<PolicyModalComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.matDialogRef.close();
  }

}

