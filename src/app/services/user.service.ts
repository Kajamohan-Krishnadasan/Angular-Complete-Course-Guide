import { EventEmitter } from '@angular/core';

export class UserService {
  // this will enable and disable the button in app.component.html
  userAddedEvent = new EventEmitter<boolean>();

  getUser(id: string) {
    if (id === '1') {
      return {
        id: 1,
        name: 'Saji',
      };
    } else {
      return {
        id: 77,
        name: 'Anu',
      };
    }
  }

  addUser() {
    this.userAddedEvent.emit(true);
  }
}
