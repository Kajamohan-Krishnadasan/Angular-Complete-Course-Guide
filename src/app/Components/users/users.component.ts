import { Component } from '@angular/core';
import { userModel } from 'src/app/model/user.type';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  usersList: string[] = [];
  userName: string = '';

  isInputValid: boolean = false;

  addNewUsers(event: userModel) {
    let firstName = event.firstName;
    let lastName = event.lastName;

    if (firstName !== '' && lastName !== '') {
      this.userName = firstName + ' ' + lastName;

      this.usersList.push(this.userName);

      this.isInputValid = false;
    } else {
      this.isInputValid = true;
    }

    this.clear();
  }

  clear() {
    this.userName = '';
  }

  checkUserList() {
    if (this.usersList.length === 0) {
      return false;
    } else {
      return true;
    }
  }
}
