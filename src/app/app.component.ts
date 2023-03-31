import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular-Complete-Course-Guide';
  isButtonDisable: boolean = false;

  userAdded: boolean = false;
  userAddedSubscription!: Subscription;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userAddedSubscription = this.userService.userAddedEvent.subscribe((data) => {
      this.userAdded = data;
    });
  }

  onLogin() {
    this.isButtonDisable = !this.isButtonDisable;
    this.authService.login();
  }

  onLogout() {
    this.isButtonDisable = !this.isButtonDisable;
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userAddedSubscription.unsubscribe();
  }
}
