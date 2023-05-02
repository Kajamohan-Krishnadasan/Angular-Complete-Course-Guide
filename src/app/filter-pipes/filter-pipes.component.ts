import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.scss'],
})
export class FilterPipesComponent {
  // async pipe
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User Data Received');
    }, 2000);
  });

  filteredString: string = '';

  users = [
    {
      name: 'Kaja',
      joined: new Date('01,02,2018'),
    },
    {
      name: 'Arshath',
      joined: new Date('01/15/2020'),
    },
    {
      name: 'Jathu',
      joined: new Date('10/02/2023'),
    },
    {
      name: 'Kabilan',
      joined: new Date('8/02/2018'),
    },
  ];

  onAddUser() {
    this.users.push({
      name: 'Niroshan',
      joined: new Date('9/31/1998'),
    });
  }
}
