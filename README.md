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

- from child element

  - in `add-user.component.ts` file

  ```\
  <button class="btn btn-primary" (click)="addNewUsers()">Add User</button>
  ```

  - in `add-user.component.ts` file

  ```\

  firstName: string = '';
  lastName: string = '';

  userName: string = '';

  @Input() isInputValid!: boolean;

  /*
  * add custom event
  * here the userModel is a interface
  * userModel {
     firstName: string;
     lastName: string;
    }
  * here we are sending the userAdded event to the parent component
  */
  @Output() userAdded = new EventEmitter<userModel>();

  addNewUsers() {
    this.userAdded.emit({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }
  ```

- in the parent element

  - in `users.component.html` file

  ```\
  <app-add-user
  (userAdded)="addNewUsers($event)"
  [isInputValid]="isInputValid"
  ></app-add-user>
  ```

  - in `users.component.ts` file

  ```\
  addNewUsers(event: userModel) {
    let firstName = event.firstName;
    let lastName = event.lastName;

    if (firstName !== '' && lastName !== '') {
      this.userName = firstName + ' ' + lastName;

      this.usersList.push(this.userName);

      this.isInputValid = false;
    } else {
      this.isInputValid = true;
    }

    this.clear();
  }
  ```

## apply style to the child component

- in `users.component.ts` file
- using **encapsulation**

```\
  // in side the @Component() decorator
  encapsulation: ViewEncapsulation.None,

```

- view encapsulation is used to apply style to the child component
- there are three types of view encapsulation
  - **None**: this is used to apply style to the child component
  - **Emulated**: this is a default value
  - **ShadowDom**: this is used to use the native shadow dom

## Local reference

- in html file

```\
  <input type="text" #myInput>
  <button (click)="onAddUser(myInput)">Add User</button>
```

here `#myInput` is a local reference
access the value of the input element using `myInput.value`

- in ts file

```\
  onAddUser(input: HTMLInputElement) {
    console.log(input.value);
  }
```

## ViewChild

- in html file

```\
  <input type="text" #myInput>
  <button (click)="onAddUser()">Add User</button>
```

- in ts file

```\
  @ViewChild('myInput') myInput!: ElementRef;

  onAddUser() {
    console.log(this.myInput.nativeElement.value);
  }
```

- here `@ViewChild('myInput') myInput!: ElementRef;` is a decorator
- `myInput` is a local reference

## ng-content

- in `./users.component.html` file

```\
<app-add-user>
  <div class="alert alert-danger" role="alert">
    Please enter a valid user name
  </div>
</app-add-user>
```

above in side `div` not display in the ouput. therefore we use `ng-content` to display the content.

- in `./add-user.component.html` file

```\
<div>
  <ng-content></ng-content>
</div>
```

using `ng-content` we can display the content in the parent component.

- this is mostly use to to sent html content to the child component

## component life cycle

- order of the life cycle

  - ngOnChanges
  - ngOnInit
  - ngDoCheck
  - ngAfterContentInit
  - ngAfterContentChecked
  - ngAfterViewInit
  - ngAfterViewChecked
  - ngOnDestroy

- in `*.component.ts` file

```\
  // this is called when the input property is changed
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  // this is called when the component is created/ initialized
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  // this is always called when the component is updated/ changed
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  // this is called when the component use ng-content first time
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  // this is called when the component use ng-content and changes
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // this is called when the component template is loaded
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  // this is called when the component template is loaded and changes
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  // this is called when the component is destroyed
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

```

## view child and content child

- view child is used to access the child component
- in `./add-user.component.html` file

```\
 <label class="m-2">
    Email :
    <input type="email" class="form-control" #userMail />
  </label>

  <button class="btn btn-primary mx-3" (click)="addUserMail(userMail)">
    Add Email
  </button>
```

- in `./add-user.component.ts` file

```\
  @ViewChild('userMail') userMail!: ElementRef;

  addUserMail(val: HTMLInputElement) {
    this.email = val.value;
  }
```

- content child is used to access the child component which is used in the parent component
- in `./users.component.html` file

```\
<app-user
    *ngFor="let user of usersList"
  >
    <span #userSpan> Username : {{ user }} </span>
  </app-user>
```

- in `./user.component.ts` file

```\
  @ContentChild('userSpan') userSpan!: ElementRef;

  ngAfterContentInit() {
    console.log(this.userSpan.nativeElement.textContent);
  }
```

- in the above code we are accessing the `userSpan` which is used in the parent component
- we can access the text content of the `userSpan` using `this.userSpan.nativeElement.textContent`
