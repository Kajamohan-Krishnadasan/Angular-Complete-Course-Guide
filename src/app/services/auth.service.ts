import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isloggedIn = false;

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC95xNszUB6r5d0rLr8JX-3Kgnxs_Y_Bv4`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }

  login() {
    this.isloggedIn = true;
  }

  logout() {
    this.isloggedIn = false;
  }

  isAuthenticated() {
    // here we can use a promise to simulate a server response
    // and then return the value of this.isloggedIn
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isloggedIn);
      }, 100);
    });
  }
}
