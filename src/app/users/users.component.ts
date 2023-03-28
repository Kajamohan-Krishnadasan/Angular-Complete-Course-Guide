import { Component, OnInit } from '@angular/core';

@Component({
  // here we can use the selector as a tag
  // selector: 'app-users',

  // here we can use the selector as an attribute
  // selector: '[app-users]',

  // here we can use the selector as a class
  selector: '.app-users',


  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  styles: [
    `
      h3 {
        color: red;
      }
    `,
  ],
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
