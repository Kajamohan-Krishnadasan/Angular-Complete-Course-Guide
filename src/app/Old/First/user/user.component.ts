import { Component } from '@angular/core';

// create class as a component we need a decorator
@Component({
  selector: 'app-first-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  userId: number = 13;
  userStatus: string;

  constructor() {
    // Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
    this.userStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getUserStatus() {
    return this.userStatus;
  }

  getColor() {
    if (this.userStatus === 'online') {
      return 'green';
    }else{
      return 'red';
    }
  }
}
