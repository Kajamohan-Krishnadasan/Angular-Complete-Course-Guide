import { EventEmitter, Injectable } from '@angular/core';
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

  // here we are creating an event emitter
  // this will be used to emit the data to the parent component
  statusUpdated = new EventEmitter<string>();

  addUser(name: string, status: string) {
    this.users.push({ name, status });
    this.logService.logStatus(status + ' added');
  }

  updateUserStatus(id: number, status: string) {
    this.users[id].status = status;

    // here we are emiting the data to the parent component
    this.statusUpdated.emit(status);
    this.logService.logStatus(status + ' updated');
  }
}
