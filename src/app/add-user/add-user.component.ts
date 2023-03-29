import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  userName: string = '';

  constructor(private userService: UserService) {}

  addUser() {
    this.userService.addUser(this.userName, 'Active');
    this.userName = '';
  }
}
