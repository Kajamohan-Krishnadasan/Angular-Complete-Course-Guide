import { Component, OnInit } from '@angular/core';

@Component({
  // here we can use the selector as a tag
  selector: 'app-first-users',

  // here we can use the selector as an attribute
  // selector: '[app-users]',

  // here we can use the selector as a class
  // selector: '.app-users',

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
  allowNewUser = false;
  userCreatedStatus = 'No User is Created!';
  userName = 'Test User';
  isUserCreated = false;

  users: any = ['Kaja'];

  constructor() {
    // here after 3 seconds the allowNewUser will be true
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
  }

  // this method will be called when the button is clicked
  changeUserCreatedStatus() {
    this.userCreatedStatus = 'User is Created';
    this.isUserCreated = true;

    // add new user to the users array
    // if (this.userName != '' && this.userName != null) {
    this.users.push(this.userName);
    // } else {
    //   alert('Enter a valid user name');
    // }
  }

  // this method will be called when the input is changed
  // get the user name from the input
  onUpdateUser(event: Event) {
    // method 1
    this.userName = (event.target as HTMLInputElement).value;

    // method 2
    this.userName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {}
}
