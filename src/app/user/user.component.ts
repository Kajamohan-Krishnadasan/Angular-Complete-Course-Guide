import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user!: { id: number; name: string };

  // using ActivatedRoute to get the route parameters
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // method 1
    // if the url parameters are changed, this method will not be called
    // this.user = {
    //   // here we are using the snapshot to get the route parameters
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name'],
    // };

    // method 2
    // if the url parameters are changed, this method will be called
    this.route.params.subscribe((data) => {
      this.user = {
        id: data['id'],
        name: data['name'],
      };
    });
  }
}
