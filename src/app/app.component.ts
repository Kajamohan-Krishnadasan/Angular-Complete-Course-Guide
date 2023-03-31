import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular-Complete-Course-Guide';
  isButtonDisable: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onLogin() {
    this.isButtonDisable = !this.isButtonDisable;
    this.authService.login();
  }

  onLogout() {
    this.isButtonDisable = !this.isButtonDisable;
    this.authService.logout();
  }
}
