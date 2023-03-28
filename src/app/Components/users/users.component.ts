import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  firstName: string = '';
  lastName: string = '';
  userName: string = '';

  firstNameList: string[] = [];
  usersList: string[] = [];

  isInputValid: boolean = false;

  addNewUsers() {
    if (this.firstName !== '' && this.lastName !== '') {
      this.userName = this.firstName + ' ' + this.lastName;

      this.usersList.push(this.userName);
      this.firstNameList.push(this.firstName);

      this.isInputValid = false;
    } else {
      this.isInputValid = true;
    }

    this.clear();
  }

  clear() {
    this.firstName = '';
    this.lastName = '';
    this.userName = '';
  }

  checkUserList() {
    if (this.usersList.length === 0) {
      return false;
    }
    else{
      return true;
    }
  }
}
