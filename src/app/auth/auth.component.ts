import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode: boolean = true;

  constructor(private authService: AuthService) {
    console.log('AuthComponent constructor');
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onFormSubmit(authForm: NgForm) {
    console.log(authForm.value);
    if (authForm.invalid) {
      console.log('invalid form');
      return;
    }
    
    if (this.isLoginMode) {
      // login
    } else {
      // signup
      this.authService
        .signUp(authForm.value.email, authForm.value.password)
        .subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }
}
