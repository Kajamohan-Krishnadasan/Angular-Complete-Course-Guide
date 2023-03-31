import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user!: { id: number; name: string };

  // using ActivatedRoute to get the route parameters
  // using Router to navigate to another route
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // method 1
    // if the url parameters are changed, this method will not be called
    this.user = {
      // here we are using the snapshot to get the route parameters
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };

    // method 2
    // if the url parameters are changed, this method will be called
    this.route.params.subscribe((data) => {
      this.user = {
        id: data['id'],
        name: data['name'],
      };
    });

    // get the query parameters and fragment
    // method 1
    // console.log('(Method 1) queryParams: ', this.route.snapshot.queryParams);
    // console.log('(Method 1) fragement: ', this.route.snapshot.fragment);

    // method 2
    // this.route.queryParams.subscribe((data) =>
    //   console.log('(Method 2) queryParams: ', data)
    // );
    // this.route.fragment.subscribe((data) => {
    //   console.log('(Method 2) fragement: ', data);
    // });
  }

  getRamaDetails() {
    /*
     * using this method we can
     * navigate to another route and
     * our url will be changed to
     * /users/20/Rama?page=2&search=newest#loading
     */
    this.router.navigate(['/users', 20, 'Rama'], {
      queryParams: { page: 2, search: 'newest' },
      fragment: 'loading',
    });
  }

  userEdit() {
    // here the query parameters take (merge, preserve)
    // merge - will merge the new query parameters with the old query parameters
    // preserve - will preserve the old query parameters
    this.router.navigate(['/users', this.user.id, this.user.name, 'edit'], {
      queryParamsHandling: 'preserve',
    });
  }
}
