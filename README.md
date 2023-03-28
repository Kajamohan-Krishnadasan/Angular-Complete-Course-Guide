# Angular | Complete Course Guide

## Angular General get started Information

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Project Structure

- Main exection and entry file: `src/main.ts`
- In `src/app/app.module.ts` file
  - Entry point of the application : `bootstrap: [AppComponent]`

## install Bootstrap

- **npm i bootstrap@5.3.0-alpha2**
- add this in `angular.json` file
  - `"styles": ["node_modules/bootstrap/dist/css/bootstrap.min.css", "src/styles.css"]`

## @NgModule

- **declarations**: components, directives, pipes
- **imports**: modules
- **providers**: services
- **bootstrap**: root component

## @Component

- **selector**: name of the component (used in html)

  - selector: `app-root`
  - this is not mandatory

- **selector**: `[app-root]`

  - this is not mandatory
  - this is used for attribute selector

- **styleUrls**: css file for particular component

  - styleUrls: `./app.component.css`
  - this is not mandatory

- **styles**: css code for particular component

  - styles: `h1{color: red;}`
  - this is not mandatory

- **template**: html code for particular component

  - template: `<h1>hello</h1>`

- **templateUrl**: html file for particular component

  - templateUrl: `./app.component.html`

- template and templateUrl can't be used together
- template and templateUrl one of them is mandatory

## Angular execution flow

1. index.html
2. main.ts
3. app.module.ts
4. app.component.ts
5. app.component.html

## Create a new component

- **ng g c component-name**

- use component selector as html tag

  - in `app.component.ts` file
  - `selector: 'app-component-name'`

  - in `app.component.html` file
  - `<app-component-name></app-component-name>`

- use component selector as attribute

  - in `app.component.ts` file
  - `selector: '[app-component-name]'`

  - in `app.component.html` file
  - `<div app-component-name></div>`

- use component selector as class

  - in `app.component.ts` file
  - `selector: '.app-component-name'`

  - in `app.component.html` file
  - `<div class="app-component-name"></div>`

## Binding

- data binding is
  how to send data from component to html is called data binding

  - in `app.component.ts` file
  - `user: string = 'Kajamohan';`

  - in `app.component.html` file
  - `<h1>Hi, I'm {{user}}</h1>`

### String interpolation

- we need to use double curly braces
- **string interpolation**: {{allowNewUser}}
- in `app.component.ts` file
  `allowNewUser: boolean = false;`

- in `app.component.html` file
  `<div>{{allowNewUser}}</div>`

- in `app.component.html` file
  `<div [innerText]="allowNewUser"></div>`

### Property binding

- we need to use square brackets
- **property binding**: [property]="data"

  - in `app.component.ts` file
  - `allowNewUser: boolean = false;`

  - in `app.component.html` file
  - `<button [disabled]="allowNewUser">Add User</button>`

### Event binding

- we need to use round brackets
- **event binding**: (event)="function()"

### sent data from html to component

- from the input field we need to get the data then we need to add event binding
- in `app.component.html` file

```\
<input type="text" (input)="onUserInput($event)">
<div> {{useName}} </div>
```

- here $event is sent event object to the function

- in `app.component.ts` file

  ```\
  useName: string = '';

    // get the user name from the input
   onUpdateUser(event: Event) {
     // method 1
     this.useName = (event.target as HTMLInputElement).value;

     // method 2
     this.useName = (<HTMLInputElement>event.target).value;
   }
  ```

### Two way binding

- we need to use square brackets and round brackets
- this is used for form elements
- **two way binding**: [(ngModel)]="data"

- in `app.component.html` file

```\
 <input type="text" [(ngModel)]="useName">
 <div> {{useName}} </div>
```

## Directives

### ngIf

- conditionally add or remove an element from the DOM
- this is a structural directive
- if the condition is true, the element will be rendered here when the user click the Add User Button isUserCreated change to true and blow div will render

- in `app.component.html` file

#### method 1

```\
// if is true this will render
 <div *ngIf="isUserCreated">
  {{ userCreatedStatus }} and the username is {{ userName }}
</div>

// if is false this will render
<div *ngIf="!isUserCreated">
  {{ userCreatedStatus }}
</div>

```

#### method 2

```\
<div *ngIf="isUserCreated; else noUser">
{{ userCreatedStatus }} and the
  username is {{ userName }}
</div>

<ng-template #noUser>
  <div>{{ userCreatedStatus }}</div>
</ng-template>
```

### [ngStyle] and [ngClass]

- in `./First/user.component.html` file

```\
<div
  class="my-2"
  [ngClass]="{ offline: getUserStatus() == 'offline' }"
  [ngStyle]="{ backgroundColor: getColor() }"
>
  {{ "User" }} with ID {{ userId }} is {{ getUserStatus() }}
</div>
```

- in `./First/user.component.ts` file

```\
  getColor() {
    if (this.userStatus === 'online') {
      return 'green';
    }else{
      return 'red';
    }
  }
```

- in `./First/user.component.css` file

```\
.offline {
  color: rgb(255, 255, 255);
}
```

### ngFor

- in `./First/users.component.html` file

```\
<div *ngFor="let user of users">
  User Name : {{ user }}
</div>
```

- in `./First/users.component.ts` file

```\
 // add new user to the users array
    if (this.userName != '' && this.userName != null) {
      this.users.push(this.userName);
    } else {
      alert('Enter a valid user name');
    }
```

## Send data from parent to child component

- from parent element

  - in `users.component.ts` file

  ```\
  usersList: string[] = [];
  ```

  - in `users.component.html` file

  ```\
  <app-user *ngFor="let user of usersList" [usernameFromParent] = 'user'></app-user>
  ```

  - in `user.component.ts` file

  ```\
  @Input() usernameFromParent: string;

  // or other way
  @Input('usernameFromParent') username: string;
  ```

  - in `user.component.html` file

  ```\
  <p>Username : {{usernameFromParent}} </p>

  // or other way
  <p>Username : {{username}} </p>
  ```

## Send data from child to parent component
