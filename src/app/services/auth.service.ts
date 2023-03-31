export class AuthService {
  isloggedIn = false;

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
