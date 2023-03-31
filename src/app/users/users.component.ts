import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  // using Router to navigate to a route
  constructor(private router: Router) {}

  onNavigateToCategories() {
    // method 1
    // this.router.navigateByUrl('/categories');

    // method 2
    this.router.navigate(['/categories']);
  }

  onNavigateToKajaUser() {
    this.router.navigate(['/users', 13, 'Kajamohan']);
  }
}
