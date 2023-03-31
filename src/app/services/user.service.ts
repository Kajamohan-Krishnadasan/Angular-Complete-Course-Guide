export class UserService {
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
}
