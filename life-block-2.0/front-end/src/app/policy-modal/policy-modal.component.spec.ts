import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyModalComponent } from './policy-modal.component';

describe('PolicyModalComponent', () => {
  let component: PolicyModalComponent;
  let fixture: ComponentFixture<PolicyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
