import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-third-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  userName: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.statusUpdated.subscribe((data) => {
      alert(data);
      console.log(data);
    });
  }

  addUser() {
    this.userService.addUser(this.userName, 'Active');
    this.userName = '';
  }
}
