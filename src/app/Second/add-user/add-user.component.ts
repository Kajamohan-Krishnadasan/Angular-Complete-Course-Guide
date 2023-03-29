import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { userModel } from 'src/app/model/user.type';

@Component({
  selector: 'app-second-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  userName: string = '';

  @Input() isInputValid!: boolean;

  // add custom event
  @Output() userAdded = new EventEmitter<userModel>();

  // access local reference
  @ViewChild('userMail') userMail!: ElementRef;

  addNewUsers() {
    this.userAdded.emit({
      firstName: this.firstName,
      lastName: this.lastName,
    });

    console.log('User is added '+ this.firstName + ' ' + this.lastName);
  }

  addUserMail(val: HTMLInputElement) {
    if (this.userMail.nativeElement.value !== '') {
      this.email = val.value;
      console.log(this.email);
    } else {
      alert('Please enter email');
    }
  }
}
