import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryComponent } from './beneficiary.component';

describe('BeneficiaryComponent', () => {
  let component: BeneficiaryComponent;
  let fixture: ComponentFixture<BeneficiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
