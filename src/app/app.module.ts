import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountTypeComponent } from './account-type/account-type.component';
import { OnboardingEarningPlanComponent } from './onboarding-earning-plan/onboarding-earning-plan.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { ConfirmationEmailComponent } from './confirmation-email/confirmation-email.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainWrapperComponent,
    SignUpComponent,
    AccountTypeComponent,
    OnboardingEarningPlanComponent,
    ProfilePictureComponent,
    ConfirmationEmailComponent,
    UserProfileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
