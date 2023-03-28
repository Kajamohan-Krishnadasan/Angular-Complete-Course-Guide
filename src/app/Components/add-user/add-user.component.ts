import { Component, EventEmitter, Input, Output } from '@angular/core';
import { userModel } from 'src/app/model/user.type';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  firstName: string = '';
  lastName: string = '';

  userName: string = '';

  @Input() isInputValid!: boolean;

  // add custom event
  @Output() userAdded = new EventEmitter<userModel>();

  addNewUsers() {
    this.userAdded.emit({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }
}
