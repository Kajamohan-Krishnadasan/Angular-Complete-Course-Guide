import { Component, Input } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() user!: { name: string; status: string };
  @Input() id!: number;

  constructor(private userService: UserService) {}

  updateStatus(status: string) {
    this.userService.updateUserStatus(this.id, status);
  }
}
