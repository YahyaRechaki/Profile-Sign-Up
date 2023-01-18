import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingEarningPlanComponent } from './onboarding-earning-plan.component';

describe('OnboardingEarningPlanComponent', () => {
  let component: OnboardingEarningPlanComponent;
  let fixture: ComponentFixture<OnboardingEarningPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingEarningPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingEarningPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
