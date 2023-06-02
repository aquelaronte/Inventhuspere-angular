import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from 'src/app/interfaces/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}
  signupData: Signup = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    company: '',
  };

  isFirstnameInvalid = false;
  isLastnameInvalid = false;
  isEmailInvalid = false;
  isPasswordInvalid = false;
  isCompanyInvalid = false;
  isUserRegistered = false;
  isUserRegisterSuccessfully = false;

  signup() {
    this.authService.signup(this.signupData).subscribe({
      next: () => {
        this.isUserRegisterSuccessfully = true;
        setTimeout(() => {
          this.router.navigate(['/signin']);
        }, 5000);
      },
      error: ({ status, error }) => {
        console.log(error);
        if (status == 400) {
          if (error.errors) {
            // console.log(error);
            const isFirstnameError = !!error.errors.find(
              (error: any) => error.path == 'firstname'
            );
            const isLastnameError = !!error.errors.find(
              (error: any) => error.path == 'lastname'
            );
            const isEmailError = !!error.errors.find(
              (error: any) => (error.path = 'email')
            );
            const isPasswordError = !!error.errors.find(
              (error: any) => (error.path = 'password')
            );
            const isCompanyError = !!error.errors.find(
              (error: any) => error.path == 'company'
            );

            this.isFirstnameInvalid = isFirstnameError ? true : false;
            this.isLastnameInvalid = isLastnameError ? true : false;
            this.isEmailInvalid = isEmailError ? true : false;
            this.isPasswordInvalid = isPasswordError ? true : false;
            this.isCompanyInvalid = isCompanyError ? true : false;
          }
          if (error.keyPattern) {
            this.isUserRegistered = true;
          }
        }
      },
    });
  }
}
