import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  user = {
    username: '',
    email: '',
    password: ''
  };


  constructor(private http: HttpClient, private router: Router) {}

  // signUp() {
  //   this.router.navigate(['/signup']);
  // }
  onSubmit() {
    this.http.post('http://localhost:9090/auth/register', this.user).subscribe({
      next: (res) => {
        console.log("res : ", res);
        this.router.navigate(['/Account/OnboardingChooseAccountType']);
      },
      error: (err) => {
        console.log("err : ", err);
      },
      complete: () => {
        console.log("completed");
      }
    });
  }


}
