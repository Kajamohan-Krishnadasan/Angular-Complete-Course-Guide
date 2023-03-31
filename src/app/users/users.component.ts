import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  // using Router to navigate to a route
  constructor(private router: Router, private userService: UserService) {}

  onNavigateToCategories() {
    // method 1
    // this.router.navigateByUrl('/categories');

    // method 2
    this.router.navigate(['/categories']);
  }

  onNavigateToKajaUser() {
    this.router.navigate(['/users', 13, 'Kajamohan']);
  }

  userAddedClick() {
    this.userService.addUser();
  }
}
