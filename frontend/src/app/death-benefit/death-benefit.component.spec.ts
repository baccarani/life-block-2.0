import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathBenefitComponent } from './death-benefit.component';

describe('DeathBenefitComponent', () => {
  let component: DeathBenefitComponent;
  let fixture: ComponentFixture<DeathBenefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathBenefitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeathBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
