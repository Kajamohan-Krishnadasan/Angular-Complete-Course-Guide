import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class UserService {
  constructor(private logService: LogService) {}

  users = [
    {
      name: 'Kaja',
      status: 'Active',
    },
    {
      name: 'Niroshan',
      status: 'Inactive',
    },
    {
      name: 'Arshath',
      status: 'Active',
    },
  ];

  addUser(name: string, status: string) {
    this.users.push({ name, status });
    this.logService.logStatus(status + ' added');
  }

  updateUserStatus(id: number, status: string) {
    this.users[id].status = status;
    this.logService.logStatus(status + ' updated');
  }
}
