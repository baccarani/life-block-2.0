import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryInfoComponent } from './beneficiary-info.component';

describe('BeneficiaryInfoComponent', () => {
  let component: BeneficiaryInfoComponent;
  let fixture: ComponentFixture<BeneficiaryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiaryInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
