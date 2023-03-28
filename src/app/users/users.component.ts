import { Component, OnInit } from '@angular/core';

@Component({
  // here we can use the selector as a tag
  // selector: 'app-users',

  // here we can use the selector as an attribute
  // selector: '[app-users]',

  // here we can use the selector as a class
  selector: '.app-users',

  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  styles: [
    `
      h3 {
        color: red;
      }
    `,
  ],
})
export class UsersComponent implements OnInit {
  allowNewUser: boolean = false;
  userCreatedStatus: string = 'No User is Created!';
  userName: string = 'Test User';
  isUserCreated: boolean = false;

  constructor() {
    // here after 3 seconds the allowNewUser will be true
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
  }

  changeUserCreatedStatus() {
    this.userCreatedStatus = 'User is Created';
    this.isUserCreated = true;
  }

  // get the user name from the input
  onUpdateUser(event: Event) {
    // method 1
    this.userName = (event.target as HTMLInputElement).value;

    // method 2
    this.userName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {}
}
