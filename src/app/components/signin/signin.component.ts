import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Signin } from 'src/app/interfaces/signin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  signinData: Signin = {
    email: '',
    password: '',
  };

  isEmailIncorrect = false;
  isPasswordIncorrect = false;
  isEmailInvalid = false;
  isPasswordInvalid = false;

  constructor(private authService: AuthService, private router: Router) {}

  signin() {
    this.authService.login(this.signinData).subscribe({
      next: ({ response }: any) => {
        localStorage.setItem('Authorization', response.Authorization);
        localStorage.setItem('user-id', response.id);
        this.router.navigate(['/user/home']);
      },
      error: ({ status, error }) => {
        status == 401
          ? (this.isPasswordIncorrect = true)
          : (this.isPasswordIncorrect = false);
        if (status == 400) {
          // console.log(error);
          const isEmailError = !!error.errors.find(
            (error: any) => error.path == 'email'
          );
          const isPasswordError = !!error.errors.find(
            (error: any) => (error.path = 'password')
          );

          this.isEmailInvalid = isEmailError ? true : false;
          this.isPasswordInvalid = isPasswordError ? true : false;
        }
        this.isEmailIncorrect = status == 404 ? true : false;
      },
    });
  }
}
