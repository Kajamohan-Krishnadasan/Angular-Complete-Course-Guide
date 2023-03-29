import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { userModel } from 'src/app/model/user.type';
import { LoggingService } from 'src/app/Services/logging.service';

@Component({
  selector: 'app-second-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  providers: [LoggingService],
})
export class UsersComponent implements OnInit {
  usersList: string[] = ['Niroshan'];
  name: string = 'Kajamohan';
  isAvailable: boolean = true;
  value: number = 10;
  userName: string = this.name;
  isInputValid: boolean = false;

  firstName: string = '';
  lastName: string = '';

  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {}

  addNewUsers(event: userModel) {
    this.firstName = event.firstName;
    this.lastName = event.lastName;

    if (this.firstName !== '' && this.lastName !== '') {
      this.userName = this.firstName + ' ' + this.lastName;

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

  changeName() {
    this.name = 'Arshath';
    // console.log(this.name);

    /*
    * use the services
    * this is not a good practice
     let loggingService = new LoggingService();
     loggingService.logToConsole('User name is changed to ' + this.name);
    */
    this.loggingService.logToConsole('User name is changed to ' + this.name);
  }

  deletecomponent() {
    this.usersList = [];
  }
}
