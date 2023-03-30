import { Component, OnInit } from '@angular/core';
import { LogService } from './Services/log.service';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-old-root',
  templateUrl: './app.component.html',
  providers: [UserService, LogService],
})
export class AppComponent implements OnInit {
  title = 'Angular-Complete-Course-Guide';
  name = 'Kajamohan';
  users: { name: string; status: string }[] = [];

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.users = this.userService.users;
  }
}
