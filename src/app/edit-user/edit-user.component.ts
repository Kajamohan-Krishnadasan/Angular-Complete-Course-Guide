import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDeactivateGuard } from '../services/guards/deactivate-guard.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements IDeactivateGuard, OnInit {
  user!: { id: string; name: string };
  editUserDetails!: { id: string; name: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // method 1
    // using route params
    // this.route.params.subscribe((data) => {
    //   this.user = {
    //     id: data['id'],
    //     name: data['name'],
    //   };

    //   // save the original user details
    //   this.editUserDetails = { ...this.user };
    // });

    // method 2
    // using resolver
    this.route.data.subscribe((data) => {
      console.log(data['user']);
      this.user = {
        id: data['user']['id'],
        name: data['user']['name'],
      };

      // save the original user details
      this.editUserDetails = { ...this.user };
    });
  }

  canExit() {
    if (
      this.user.id !== this.editUserDetails.id ||
      this.user.name !== this.editUserDetails.name
    ) {
      if (
        confirm(
          'All changes will be lost if you move to another page. \nAre you sure you want to exit? '
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

  updateUserDetails() {}
}
