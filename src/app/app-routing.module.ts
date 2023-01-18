import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { AccountTypeComponent } from './account-type/account-type.component';
import { OnboardingEarningPlanComponent } from './onboarding-earning-plan/onboarding-earning-plan.component';

const routes: Routes = [
  { path: 'account/register', component: SignUpComponent },
  {
    path: '',
    component: MainWrapperComponent,
    children: [
      {path: '', component: NavbarComponent}
    ]
  },
  {path: 'Account/OnboardingChooseAccountType', component: AccountTypeComponent},
  {path: 'Account/OnboardingEarningPlan', component: OnboardingEarningPlanComponent},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

