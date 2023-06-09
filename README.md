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

  - in `app-first.component.html` file
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

## Directives Basics

- they are 2 types
  - structural directives
  - attribute directives

### structural directives

- they are used to change the structure of the DOM
  - \*ngIf
  - \*ngFor

### attribute directives

- they are used to change the appearance of the DOM
  - [ngStyle]
  - [ngClass]

### ngIf basic

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

  - in `./Second/users.component.ts` file

  ```\
  usersList: string[] = [];
  ```

  - in `./Second/users.component.html` file

  ```\
  <app-user *ngFor="let user of usersList" [usernameFromParent] = 'user'></app-user>
  ```

  - in `./Second/user.component.ts` file

  ```\
  @Input() usernameFromParent: string;

  // or other way
  @Input('usernameFromParent') username: string;
  ```

  - in `./Second/user.component.html` file

  ```\
  <p>Username : {{usernameFromParent}} </p>

  // or other way
  <p>Username : {{username}} </p>
  ```

## Send data from child to parent component

- from child element

  - in `./Second/add-user.component.ts` file

  ```\
  <button class="btn btn-primary" (click)="addNewUsers()">Add User</button>
  ```

  - in `./Second/add-user.component.ts` file

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

  - in `./Second/users.component.html` file

  ```\
  <app-add-user
  (userAdded)="addNewUsers($event)"
  [isInputValid]="isInputValid"
  ></app-add-user>
  ```

  - in `./Second/users.component.ts` file

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

- in `./Second/users.component.ts` file
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

- in `./Second/users.component.html` file

```\
<app-add-user>
  <div class="alert alert-danger" role="alert">
    Please enter a valid user name
  </div>
</app-add-user>
```

above in side `div` not display in the ouput. therefore we use `ng-content` to display the content.

- in `./Second/add-user.component.html` file

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
- in `./Second/add-user.component.html` file

```\
 <label class="m-2">
    Email :
    <input type="email" #userMail />
  </label>

  <button class="btn btn-primary mx-3" (click)="addUserMail(userMail)">
    Add Email
  </button>
```

- in `./Second/add-user.component.ts` file

```\
  @ViewChild('userMail') userMail!: ElementRef;

  addUserMail(val: HTMLInputElement) {
    this.email = val.value;
  }
```

- content child is used to access the child component which is used in the parent component
- in `./Second/users.component.html` file

```\
<app-user
    *ngFor="let user of usersList"
  >
    <span #userSpan> Username : {{ user }} </span>
  </app-user>
```

- in `./Second/user.component.ts` file

```\
  @ContentChild('userSpan') userSpan!: ElementRef;

  ngAfterContentInit() {
    console.log(this.userSpan.nativeElement.textContent);
  }
```

- in the above code we are accessing the `userSpan` which is used in the parent component
- we can access the text content of the `userSpan` using `this.userSpan.nativeElement.textContent`

## advanced in the directive

- built in directive

  - ngIf
  - ngFor
  - ngSwitch
  - ngClass
  - ngStyle
  - ngModel

- custom directive
  - attribute directive
  - structural directive

### attribute directive

- in `./Second/users.component.html` file

```\
  // build in directive
  <div [ngStyle]="{ 'background-color': 'red' }">
    Please add the background color red
  </div>

  /*
  * custom directive as tag
  * this appHighlightText1 is a custom directive
  * from the HighlightText1.directive.ts file
  */
  <appHighlightText1>Please add the background color yellow</appHighlightText1>

  /*
  * custom directive as attribute
  * this appHighlightText2 is a custom directive
  * from the HighlightText2.directive.ts file
  */
  <div appHighlightText2>Please add the background color purple</div>

  /*
  * use the render property in the javascript
  * this appRenderHighlight2 is a custom directive
  * from the RenderHighlight2.directive.ts file
  */
  <div appRenderHighlight>Please add the background color green</div>

```

- in `./highlightText1.directive.ts` file

```\
  @Directive({
    selector: 'appHighlightText1',
  })
  export class HighlightText1Directive {
    constructor(private el: ElementRef) {
      el.nativeElement.style.backgroundColor = 'yellow';
    }
  }
```

- in `./highlightText2.directive.ts` file

```\
  @Directive({
    selector: '[appHighlightText2]',
  })
  export class HighlightText2Directive {
    constructor(private el: ElementRef) {
      el.nativeElement.style.backgroundColor = 'purple';
    }
  }
```

- in `./renderHighlight2.directive.ts` file

```\
  @Directive({
    selector: '[appRenderHighlight]',
  })
  export class RenderHighlight2Directive implements OnInit {
    // here we are using the render property in the javascript
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit() {
      this.render.setStyle(this.el.nativeElement, 'background-color', 'green');
    }
  }
```

#### @HostListener : this is used to listen the event in the directive

- @HostListener('mouseenter') mouseEnter() {} // this is used to listen the mouse enter event
- @HostListener('mouseleave') mouseLeave() {} // this is used to listen the mouse leave event
- @HostListener('click') mouseClick() {} // this is used to listen the mouse click event
- @HostListener('window:scroll') windowScroll() {} // this is used to listen the window scroll event

#### @HostBinding : this is used to bind the property in the directive

- in `./renderHighlight.directive.ts` file

```\
  @HostBinding('style.fontSize') fontSize!: string;

   @HostListener('mouseover') onmouseover(event: Event) {
    this.fontSize = '20px';
  }

  @HostListener('mouseleave') onmouseleave(event: Event) {
    this.fontSize = '16px';
  }

  @HostListener('click') onclick(event: Event) {
    this.fontSize = '30px';
  }
```

#### pass the value to the directive

- in `./Second/users.component.html` file

```\
  <div appRenderHighlight [appRenderHighlightColor]="'red'">
    Please add the background color red
  </div>
```

- in `./renderHighlight.directive.ts` file

```\
  @Input('appRenderHighlightColor') color!: string;

  ngOnInit() {
    this.render.setStyle(this.el.nativeElement, 'background-color', this.color);
  }
```

### structural directive

- ngIf
- ngFor
- ngSwitch

#### ngIf advanced

```\
  <div *ngIf="show; else elseBlock">
    <h1> This is the if block </h1>
  </div>

  <ng-template #elseBlock>
    <h1> This is the else block </h1>
  </ng-template>
```

- using [ngIf]

```\
  <ng-template [ngIf]="isAvailable">
    <div>show the div when is isAvailable is true (using [ngIf])</div>
  </ng-template>
```

#### create the custom structural directive

- in `./Second/users.component.html` file

```\
  <div *appCustomStructuralDirective>
    <h1> This is the custom structural directive </h1>
  </div>
```

- in `./customStructuralDirective.directive.ts` file
- method 1

```\
  @Directive({
    selector: '[appCustomStructuralDirective]',
  })
  export class CustomStructuralDirectiveDirective {
     @Input() appCustomStructuralDirective!: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
    ngOnChanges() {
    if (this.appCustomStructuralDirective) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
  }
```

- method 2

```\
  @Directive({
    selector: '[appCustomStructuralDirective]',
  })
  export class CustomStructuralDirectiveDirective {

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

    @Input() set appCustomStructuralDirective(condition: boolean) {
      if (condition) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    }
  }
```

#### ngSwitch

```\
// ouput will change based on the value
  <div [ngSwitch]="value">
    <div *ngSwitchCase="10">Value is 10</div>
    <div *ngSwitchCase="15">Value is 15</div>
    <div *ngSwitchDefault>Value is Default</div>
  </div>
```

## Heriarchical Injection of the angular

- **app.module.ts**

  - this is highest level
  - same instance will be used in all the components
  - same instance will be used in all the services

- **app.component.ts**

  - this is the second level
  - same instance will be used in all the components
  - different instance will be used in all the services

- **child.component.ts**
  - this is the third level
  - different instance will be used in all the components
  - different instance will be used in all the services

## Services

- services are class
- this contains the methods and properties

### create the service

- in `./logging.service.ts` file

```\
  export class LoggingService {
    logStatusChange(status: string) {
      console.log('A server status changed, new status: ' + status);
    }
  }
```

- in `./app.component.ts` file

```\
  providers: [LoggingService],
```

- or in `./Third/users.component.ts` file

```\
  providers: [LoggingService],
```

### inject the service

- in `./Third/users.component.ts` file

```\
  constructor(private loggingService: LoggingService) {}

 changeName() {
    this.name = 'Arshath';
    // console.log(this.name);

    /*
    * use the services
    * this is not a good practice
     let loggingService = new LoggingService();
     loggingService.logToConsole('User name is changed to ' + this.name);
    */
   this.loggingService.logToConsole('User name is changed to ' + this.name);
  }

```

### get the data from the service

- in `./Third/user.service.ts` file

```\
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
```

- in `/app.component.ts` file

```\
  users: { name: string; status: string }[] = [];

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.users = this.userService.users;
  }
```

### inject the service in the service

- we need to add the service in the `./app.component.ts` file

```\
  providers: [LogService, UserService],
```

- in `./user.service.ts` file
- we need to add the service in the constructor
- we need to add **@Injectable()** in the class

```\
@Injectable()
export class UserService {
  constructor(private logService: LogService) {}

  addUser(name: string, status: string) {
    this.users.push({ name, status });
    this.logService.logToConsole('User added');
  }

  // other methods
}
```

### component communication using services

- in `./user.service.ts` file
- here we are creating an event emitter and emitting the data to the parent component

```\
  // here we are creating an event emitter
  // this will be used to emit the data to another component
  statusUpdated = new EventEmitter<string>();

  updateUserStatus(id: number, status: string) {
    this.users[id].status = status;

    // here we are emiting the data to another component
    this.statusUpdated.emit(status);
    this.logService.logStatus(status + ' updated');
  }
```

- in `./Third/add-user.component.ts` file
- here we are subscribing to the event emitter and getting the data from the parent component

```\
  constructor(private userService: UserService) {}

   ngOnInit() {
    this.userService.statusUpdated.subscribe((data) => {
      alert(data);
      console.log(data);
    });
  }
```

## Routing

- this is used to navigate between the components, pages and, urls
- we have the following components

  - home.component
  - users.component
  - categories.component

### define route and using routerLink

- we need to add the following in the `./app.module.ts` file

1. add the routes

   ```\
   const allRoutesOfApp: Routes = [
     { path: '', component: HomeComponent },
     { path: 'users', component: UsersComponent },
     { path: 'categories', component: CategoriesComponent },
   ];
   ```

2. import the router module

   - **RouterModule.forRoot(allRoutesOfApp)**

   ```\
     imports: [BrowserModule, FormsModule, RouterModule.forRoot(allRoutesOfApp)],
   ```

   - **forRoot** is used to define the routes

3. add the router outlet in the `./app.component.html` file

   ```\
     <router-outlet></router-outlet>
   ```

4. add the router links in the `./app.component.html` file

   ```\
     <a routerLink="/">Home</a>
     <a routerLink="/users">Users</a>

     // here we are using property binding
     <a [routerLink]="['/categories']">Categories</a>
   ```

   - **routerLink** is used to define the path
   - if we use **href** it will reload the page therefore, here we are using **routerLink**

- if we need to pass the data to the component we can use the following

  ```\
    <a [routerLink]="['/categories', 1]">Categories</a>
  ```

  - here we are passing the id as 1

- if we need to pass the data to the component using the object we can use the following

  ```\
    <a [routerLink]="['/categories', {id: 1}]">Categories</a>
  ```

  - here we are passing the id as 1

- if we need to navigate to **/users/admin/setting**

  ```\
    <a [routerLink]="['/users', 'admin', 'setting']">Users</a>
  ```

#### using routerLinkActive

this is used to add the class to the active link

```\
  <a routerLink="/" routerLinkActive="active">Home</a>
  <a routerLink="/users" routerLinkActive="active">Users</a>
  <a [routerLink]="['/categories']" routerLinkActive="active">Categories</a>
```

here we are adding the class **active** to the active link
all time home link will be active therefore, we need to add the following in the `./app.component.html` file
**[routerLinkActiveOptions]="{exact: true}"**

```\
  <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
```

### using .ts file to navagate to the component

- in `users.component.html` file

```\
  <button (click)="onNavigateToCategories()">Go to Categories</button>
```

- in `users.component.ts` file

```\
  constructor(private router: Router) {}

    // navigate to page
   onNavigateToCategories() {
    // method 1
     this.router.navigateByUrl('/categories');

    // method 2
    this.router.navigate(['/categories']);
  }
```

### get the data from the url

- in `app.module.ts` file

```\
 {
    path: 'users/:id/:name',
    component: UserComponent,
  },
```

- in the `user.component.ts` file

```\
  user!: { id: number; name: string };

  // using ActivatedRoute to get the current route parameters
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
  }
```

here we are using the **snapshot** to get the route parameters

- in the `user.component.html` file

```\
  <p>User with ID {{ user.id }} loaded!</p>
  <p>User name is {{ user.name }}</p>
```

### get the data from the url using observable

- in the `user.component.ts` file

```\
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.user = {
        id: params['id'],
        name: params['name'],
      };
    });
  }
```

previously we were using the **snapshot** to get the route parameters
but that will not work if we are navigating to the same component this is because the **snapshot** will not update the data. therefore, we are using the **observable** to get the route parameters

### passing the query parameters

- using the following we can pass the query parameters
- if we need the url to be like this **/users/13/Kaja?page=1&search=kaja**
- here we are using the **queryParams** to pass the query parameters

```\
   <a
    [routerLink]="['/users', 13, 'Kaja']"
    [queryParams]="{ page: 1, search: 'kaja' }"
    >
    Get Details of Kaja
    </a>
```

- if we need the url to be like this **/users/13/Kaja?page=1&search=kaja#load**
- here we are using the **fragment** to pass the fragment

```\
  <a
    [routerLink]="['/users', 13, 'Kaja']"
    [queryParams]="{ page: 1, search: 'kaja' }"
    [fragment]="'load'"
    >
    Get Details of Kaja
  </a>
```

use this in the button click event

- in the `user.component.html` file

```\
  <button (click)="getRamaDetails()">Get Rama Details</button>
```

- in the `user.component.ts` file

```\
  getRamaDetails() {
    /*
    * using this method we can
    * navigate to another route and
    * our url will be changed to
    * /users/20/Rama?page=2&search=newest#loading
    */
    this.router.navigate(['/users', 20, 'Rama'], {
      queryParams: { page: 2, search: 'newest' },
      fragment: 'loading',
    });
  }
```

- we can access this using below code

```\
  // get the query parameters and fragment
  // method 1
  console.log('(Method 1) queryParams: ', this.route.snapshot.queryParams);
  console.log('(Method 1) fragement: ', this.route.snapshot.fragment);

  // method 2
  this.route.queryParams.subscribe((data) =>
    console.log('(Method 2) queryParams: ', data)
  );

  this.route.fragment.subscribe((data) => {
    console.log('(Method 2) fragement: ', data);
  });
```

### nested routes

child routes are used to create the nested routes

- in the `app.module.ts` file

```\
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
      },
    ],
  },
```

- in the `users.component.html` file

```\
  <router-outlet></router-outlet>
```

using the **router-outlet** we can render the child routes

### Preserving Query Parameters

- sent the query parameters to next page

  ```\
    <a
      [routerLink]="['/users', 13, 'Kaja']"
      [queryParams]="{ page: 1, search: 'kaja' }"
      [queryParamsHandling]="'preserve'"
      >
      Get Details of Kaja
    </a>
  ```

other options are **merge** and **preserve**
otherwise we can use this in the button click event

- in the `user.component.ts` file

```\
   userEdit() {
    this.router.navigate(['/users', this.user.id, this.user.name, 'edit'], {
        queryParamsHandling: 'preserve',
      });
  }
```

### implementing the 404 page

this will helpful if the user enter the wrong url

- in the `app.module.ts` file

```\
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
```

above code **{ path: \*\* , path: 'not-found' }** should be at the end of the routes
if we use this code in the starting of the routes then other all routes will be redirected to the **not-found** page

### use separate module for routing

- create the file `app-routing.module.ts` in the `app` folder
- add the following code in the route module

```\
  const allRoutesOfApp: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'users',
      component: UsersComponent,
      children: [
        {
          path: ':id/:name',
          component: UserComponent,
        },
        {
          path: ':id/:name/edit',
          component: EditUserComponent,
        },
      ],
    },
    {
      path: 'categories',
      component: CategoriesComponent,
    },
    {
      path: 'not-found',
      component: PageNotFoundComponent,
    },
    {
      path: '**',
      redirectTo: '/not-found',
    },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(allRoutesOfApp)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}

```

### Route Guards

3 types of route guards are there,

1. CanActivate
2. CanActivateChild
3. CanDeactivate

### canActivate

this is used to protect the routes if the user is not logged in then he can't access the routes.

- in the `app-routing.module.ts` file

```\
  const allRoutesOfApp: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'users',
      component: UsersComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: ':id/:name',
          component: UserComponent,
        },
        {
          path: ':id/:name/edit',
          component: EditUserComponent,
        },
      ],
    },
    // other routes
  ];

```

here we are using the **canActivate** to protect the routes'.
here we are using the **AuthGuard** to check the user is logged in or not.
if the user is not logged in then he can't access the UserComponent and EditUserComponent.

- create the file `auth.guard.ts` in the `service/guards` folder
- create the file `auth.service.ts` in the `service` folder

- in `auth.service.ts` file

```\
  export class AuthService {
    isloggedIn = false;

    login() {
      this.isloggedIn = true;
    }

    logout() {
      this.isloggedIn = false;
    }

    isAuthenticated() {
      return this.isloggedIn;
    }
  }
```

in the above code we are using the **isloggedIn** variable to check the user is logged in or not

- in `auth.guard.ts` file

```\
  export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isAuthenticated()) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    }
  }
```

- canActive is used to check the user is logged in or not
- if the user is not logged in then he will be redirected to the home page

### canActivateChild

- this will be used to protect the child routes.
  but this will not be used to protect the parent routes.
  parent will render without any child routes.

- otherwise we need to add the **canActivate** to the child routes

```\
  {
    path: 'users',
    component: UsersComponent,

    children: [
      {
        path: ':id/:name',
        component: UserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':id/:name/edit',
        component: EditUserComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
```

here UserComponent and EditUserComponent will be rendered only if the user is logged in.

- use the **canActivateChild** to protect the child routes

```\
  {
    path: 'users',
    component: UsersComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
      },
      {
        path: ':id/:name/edit',
        component: EditUserComponent,
      },
    ],
  },
```

- in `auth.guard.ts` file add the following code

```\
  export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isAuthenticated()) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    }

    canActivateChild(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isAuthenticated()) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    }
  }
```

- delay few seconds to redirect to the home page or child routes we can use the **setTimeout** method in the **canActivateChild** method or we can add in the `auth.service.ts` file

- in the `auth.guard.ts` file

```\
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> {
    return this.canActivate(route, state);
  }
```

- in the `auth.service.ts` file

```\
  isAuthenticated() {
      // here we can use a promise to simulate a server response
      // and then return the value of this.isloggedIn
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.isloggedIn);
        }, 1000);
      });
    }
```

### canDeactivate

- canDeactivate is used to protect the routes when the user is trying to leave the route.
- when the user going to route1 to route2,

  - then the **canDeactivate** method will be called in the route1
  - and **canActive** method will be called in the route2.

- this is mainly used in the edit the data in the form.

- in the `app-routing.module.ts` file

```\
  {
    path: 'users',
    component: UsersComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
      },
      {
        path: ':id/:name/edit',
        component: EditUserComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
```

herere we are using the **canDeactivate** to protect the EditUserComponent. if the user is trying to leave the EditUserComponent then the **canDeactivate** method will be called.

- create the file `deactivate.guard.ts` in the `service/guards` folder

- in the `deactivate.guard.ts` file

```\
  export interface IDeactivateGuard {
    canExit: () => boolean | Promise<boolean> | Observable<boolean>;
  }

  export class DeactivateGuardService implements CanDeactivate<IDeactivateGuard> {
    canDeactivate(
      component: IDeactivateGuard,
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot,
      nextState: RouterStateSnapshot
    ): boolean | Promise<boolean> | Observable<boolean> {
      return component.canExit();
    }
  }

```

- in `edit-user.component.ts` file

```\
  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.user = {
        id: data['id'],
        name: data['name'],
      };

      // save the original user details
      this.editUserDetails = { ...this.user };
    });
  }
```

above code will get the user details from the route params and save the original user details in the **editUserDetails** variable.

```\
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
    return false;
  }
```

above code will check the user details are changed or not. if the user details are changed then it will ask the user to confirm to leave the page or not. if the user details are not changed then it will not ask the user to confirm to leave the page.

### passing static data to the route

- we can pass the static data to the route using the **data** property in the route.
- in the `app-routing.module.ts` file

```\
  {
    path: '',
    component: HomeComponent,
    data: { page: 55, search: 'Niroshan' },
  },
```

we can access the data in the route using the **ActivatedRoute** service.

- in the `home.component.ts` file
- here we are using **data** property in the **ActivatedRoute** service to get the data from the route.

```\
  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data);
    });
  }
```

### passing dynamic data to the route

- we can pass the dynamic data to the route using the **resolve** property in the route.
  resolve property is used to get the data from the server before the route is loaded.

- in the `app-routing.module.ts` file

```\
  {
    path: 'users',
    component: UsersComponent,
    resolve: { users: UsersResolverService },
  },
```

- in the `users-resolver.service.ts` file

```\
interface User {
  id: number;
  name: string;
}

@Injectable()
export class UserResolveService implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User | Observable<User> | Promise<User> {
    let id = route.params['id'];

    let details = this.userService.getUser(id);

    return details;
  }
```

here we are using the user service to get the user details and return the user details.

- in the `users.service.ts` file

```\
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

```

- in the `edit-user.component.ts` file

```\
  ngOnInit() {

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
```

### use the Hash URLs

we need to add **useHash: true** in the **RouterModule.forRoot** method to use the hash URLs.

```\
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
```

## Observables

### introduction to observables in angular and rxjs

observable is a function and it will return a stream of data. And we can subscribe more than one function to the observable.

- observable is not dependent on components.
  this will affect the performance of the application.

restrict this one we need to unsubscribe the observable.

- in the `home.component.ts` file

```\
  ngOnInit() {
   // observable
    interval(1000).subscribe((data) => {
      console.log(data);
    });
  }
```

above code we are using the **interval** method to create the observable. and we are subscribing the observable to get the data. This will print the data every 1 second.
(0,1,2,3,.....)

stop this we need to unsubscribe the observable.
therefore we need to store the observable in the variable and unsubscribe the observable.

- in the `home.component.ts` file

```\

intervalSubscription!: Subscription;

  ngOnInit() {
    // observable
    this.intervalSubscription = interval(1000).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy() {

    this.intervalSubscription.unsubscribe();
  }
```

- above code we are storing the observable in the **intervalSubscription** variable. and we are unsubscribing the observable in the **ngOnDestroy** method.
  so that it will not print any more values after the component is destroyed. Otherwise it will print values even after the component is destroyed

- Angular observable is auto unsubscribe when the component is destroyed. But we need to unsubscribe the observable when we are using the custom observable are using the third party observable.
  - `eg:- interval, timer, fromEvent`

### create the custom observable

- in the `home.component.ts` file

```\
  ngOnInit() {
    // custom observable
    let customObservable = Observable.create((observer: any) => {
      let count = 10;
      setInterval(() => {
        // this will send the value to the subscriber
        observer.next(count);
        count++;
      }, 1000);
    });

    // subscribe method
    this.customObservableSubscription = customObservable.subscribe(
      (data: any) => {
        console.log('Custom Observable : ', data);
      }
    );
  }
```

### catch the error in the observable

- in the `home.component.ts` file
  here we are using the **error** method in the **observer** to send the error to the subscriber.

```\
  // in the custom observable creation
  setInterval(() => {
    // old code

    // this will send the error to the subscriber
    if (count > 15) {
      observer.error(new Error('Count is greater than 15'));
    }
  }, 1000);


  // in the subscribe method
  subscribe(
    // old code

    // this will catch the error
    ,
    (error: any) => {
      console.log(error);
    }
  );

```

when the count is greater than 15 it will send the error to the subscriber. And this will print the error in the console and it will not print any more values.

### complete in the observable

- in `home.component.ts` file
  here we are using the **complete** method in the **observer** to complete the observable.

```\
// in the custom observable creation
  setInterval(() => {
    // old code

    // this will complete the observable
    if (count > 20) {
      observer.complete();
    }
  }, 1000);

  // in the subscribe method
  subscribe(
    // old code

    // this will complete the observable
    ,
    () => {
      console.log('Completed');
    }
  );

```

when the count is greater than 20 it will complete the observable. And it will not print any more values.

### Operators in the observable

this is used to customize the data in the observable.
before sending the data to the subscriber we can customize the data using the operators.

### map operator

- in `home.component.ts` file

```\
  // using the map operator in the Observable
  this.customObservableSubscription = customObservable
    .pipe(
      map((data) => {
        return 'Count is : ' + data;
      })
    )
    .subscribe(
      (data: Data) => {
        console.log('Custom Observable : ', data);
      },
      (error: Error) => {
        console.log(error);
      },
      () => {
        console.log('Completed');
      }
    );
```

above code will print the data in the console with the message **Custom Observable : Count is : 1**.
here we are using the **map** operator to customize the data. and we are using the **pipe** method to use the operator.

#### filter operator

this will send the data to the subscriber only if the condition is true.

- in `home.component.ts` file

```\
  // using the filter operator in the Observable
   this.customObservableSubscription = customObservable
    .pipe(
      filter((data: number) => {
        if (data > 0) return true;
        return false;
      }),
      map((data: number) => {
        data = data + 1;
        return 'Count is : ' + data;
      })
    )
    .subscribe(
      (data: Data) => {
        console.log('Custom Observable : ', data);
      },
      (error: Error) => {
        console.log(error);
      },
      () => {
        console.log('Completed');
      }
    );
```

here if we are using the **filter** operator it will send the data to the subscriber only if the data is greater than 0. otherwise it will not send the data to the subscriber.

## subject

this is used to component communication.

### without subject

- in `users.component.html` file

```\
 <button class="btn btn-primary" (click)="userAddedClick()">
    User Added
  </button>
```

- in `users.component.ts` file

```\
  constructor(
    private router: Router,
    private userService: UserService
    ) {}

  userAddedClick() {
    this.userService.addUser();
  }
```

- in `user.service.ts` file

```\
  userAddedEvent = new EventEmitter<boolean>();

  addUser() {
    this.userAddedEvent.emit(true);
  }
```

here we are using the **EventEmitter** and **emit** method to send the data from the **users.component** to the **app.component**.

- in `app.component.html` file

```\
  <div *ngIf="userAdded">User Added Button Clicked</div>
```

- in `app.component.ts` file

```\

  userAdded: boolean = false;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.userAddedEvent.subscribe((data) => {
      this.userAdded = data;
    });
  }
```

here we are using the **EventEmitter** to send the data from the **users.component** to the **app.component**.

### with subject

- in `users.service.ts` file

```\
  userAdded = new Subject<boolean>();

  addUser() {
    this.userAdded.next(true);
  }
```

here we are using the **Subject** instead of the **EventEmitter** and instead of **emit** method we are using the **next** method.

other code is same as the above code.

## Form Handling

## Template Driven Form

here we mostly focus on the **template** part of the form and form handling is done in the html file.

- in `app.module.ts` file
  - import the **FormsModule** from the **@angular/forms** package

```\
  import { FormsModule } from '@angular/forms';
    imports: [
      FormsModule
    ],
```

- in `template-form.component.html` file

```\
  <form (ngSubmit)="formSubmit(formReference)" #formReference="ngForm">

    <label for="userame">User Name</label>
    <input type="text" id="userame" name="username" ngModel/>

    <label for="email">Email</label>
    <input type="text" id="email" name="email" ngModel />

    <label for="gender">Gender</label>
    <select id="gender" name="gender" ngModel>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>

    <button type="submit">Submit</button>
  </form>
```

here we need to add the **ngModel** directive and **name** attribute to the input and select elements.
Other thing is we need to add form reference to the **form** element here i'm using **#formReference** and convert this form html element to object we need to add **ngForm** in the from reference. finally send this form reference in **formSubmit()** method.

- in `template-form.component.ts` file

- method 1

  ```\

    formSubmit(formReference: NgForm) {
      console.log('Form Submitted');
      console.log(formReference.value);
    }
  ```

  if we want to print we should pass the form reference in the form html file other wise we should use @ViewChild to access this

- method 2

  ```\
  @ViewChild('formReference') signUpForm!: NgForm;

  formSubmit() {
    console.log(this.signUpForm.value);
  }
  ```

above **formSubmit** method will execute when the submit button is clicked.

### validate the form

we should add the **required** attribute to the input element to validate the form.

disabled the submit button if the form is invalid using the **disabled** attribute.
**formReference.valid** will return the boolean value depending on the form is valid or not.

```\
  <button
    type="submit"
    [disabled]="!formReference.valid"
  >Submit</button>
```

- validate the email and display the **red border**

  - in `template-form.component.html` file

  ```\
    <label for="email">Email</label>
    <input
      type="text"
      id="email"
      name="email"
      ngModel
      required
      email
      #emailReference="ngModel"
    />

    // method 1
    <span
      class="help-text"
      *ngIf=" formReference.controls['email'] &&
              !formReference.controls['valid'] &&
              formReference.controls['email'].touched"
    >
      Please enter valid email
    </span>

    // method 2
    <span
      class="help-text"
      *ngIf="emailReference.invalid && emailReference.touched"
    >
      Email is invalid
    </span>
  ```

  here we are using the **email** directive to validate the email and we are using the **#emailReference** to access the **ngModel** directive and we are using the **invalid** and **touched** property to display the error message.

  - in `template-form.component.scss` file

  ```\
    form {

      .ng-invalid.ng-touched {
        border: 3px solid red;
      }

      .help-text {
        color: red;
        font-style: italic;
      }
    }

  ```

  here we are using the **ng-invalid** and **ng-touched** class to display the red border and these classes are added by the angular automatically.

### one way and two way data binding

set default value for gender here we using the **[ngModel] = "DefaultGender"** and we need to define **DefaultGender** value in the typescript file. if we change the value in the select element it will not change the value in the **DefaultGender** variable in the typescript file. Because we are using the **one way data binding**.

- in `template-form.component.html` file

  ```\
    <label for="gender">Gender</label>
    <select id="gender" name="gender" [ngModel]="DefaultGender" >
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  ```

set default value for about here we using the **[(ngModel)] = "about"** and we need to define **about** value in the typescript file. if we change the value in the textarea element it will change the value in the **about** variable in the typescript file. because we are using the **two way data binding**.

- in `template-form.component.html` file

  ```\
    <label for="about">About</label>
    <textarea id="about" name="about" [(ngModel)]="about"></textarea>
  ```

### Group the form data

group the form data using the **ngModelGroup** attribute.

- in `template-form.component.html` file
  we wrappig with **div** tag and we use attribute **ngModelGroup="userNameAndEmailData"** to group the form data.

  ```\
    <div ngModelGroup="userNameAndEmailData">
      <label for="userame">User Name</label>
      <input type="text" id="userame" name="username" ngModel/>

      <label for="email">Email</label>
      <input type="text" id="email" name="email" ngModel />
    </div>
  ```

fill the form data using the **setValue()** method.
if we use the **setValue()** method we need to provide all the form data. otherwise it will throw an error.

- in `template-form.component.html` file

  ```\
    <button(click)="fillValues()">
      Fill Values (setValue() method)
    </button>

    <div ngModelGroup="userNameAndEmailData" #userDataRef="ngModelGroup" >

        // input elements

    </div>

  ```

here we are using the **#userDataRef** to access the **ngModelGroup** directive. therefore if we want to access the **ngModelGroup** directive we need to use **#userDataRef**.

- in `template-form.component.ts` file

  ```\
  fillValues() {
    this.signUpForm.form.setValue({
      userNameAndEmailData: {
        username: 'Kajamohan',
        email: 'Kaja@gmail.com',
      },
      gender: 'male',
      about: "i'm a software developer",
    });
    }
  ```

if we want to fill the form data partially we need to use the **patchValue()** method.

- in `template-form.component.html` file

  ```\
    <button (click)="fillSomeValues()">
      Fill Values (patchValue() method)
    </button>

    <div ngModelGroup="userNameAndEmailData" #userDataRef="ngModelGroup" >

        // input elements

    </div>

  ```

- in `template-form.component.ts` file

  ```\
  fillValues() {
    this.signUpForm.form.patchValue({
      userNameAndEmailData: {
        username: 'Kajamohan',
        email: 'Kaja@gmail.com',
      }
    });
    }
  ```

### get the form data and reset the form

- in `template-form.component.html` file

  ```\
     <form (ngSubmit)="formSubmit()" #formReference="ngForm">
      // form elements
    </form>
  ```

  here we are using the **#formReference** to access the **ngForm** directive.

- in `template-form.component.ts` file

  ```\
    @ViewChild('formReference') signUpForm!: NgForm;
    submitted = false;
    user = {
      username: '',
      email: '',
      gender: '',
      about: '',
    };

    formSubmit() {
      this.submitted = true;
      this.user.username = this.signUpForm.value.userNameAndEmailData.username;
      this.user.email = this.signUpForm.value.userNameAndEmailData.email;
      this.user.gender = this.signUpForm.value.gender;
      this.user.about = this.signUpForm.value.about;

      // reset the form
      this.signUpForm.reset();
    }

  ```

  here we are using the **#signUpForm** to access the **ngForm** directive.
  Using the **@ViewChild()** decorator we are accessing the **ngForm** directive and we are using the **value** property to get the form data.

  reset the form using the **reset()** method.

## Reactive Form

here form handling is done using the typescript file

- we need to import the **ReactiveFormsModule** in the **app.module.ts** file.

- in `reactive-form.component.html` file

```\
  <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
    <label>User Name</label>
    <input type="text" formControlName="username" />

    <label>Email</label>
    <input type="text" formControlName="email" />

    <div *ngFor="let gender of genders">
      <label>
        <input
          type="radio"
          name="gender"
          [value]="gender"
          formControlName="gender" />\

          {{ gender }}
      </label>
    </div>

    <button class="btn btn-primary">Add</button>
  </form>
```

here we are using the **[formGroup]="signupForm"** to access the **FormGroup** directive in the typescript file.

we are using the **FormControl()** method to create a form control.
using **formControlName** attribute we are binding the form control to the input element.

- in `reactive-form.component.html` file

```\
  <input type="text" formControlName="username" />

  <input type="text" formControlName="email" />


```

- in `reactive-form.component.ts` file

```\
  genders = ['male', 'female'];

  // create a form group
  signupForm!: FormGroup;

  ngOnInit() {
    // create a form group
    this.signupForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('female'),
    });
  }
```

onSubmit method

```\
  onSubmit() {
    console.log(this.signupForm);
  }
```

for form validation we need to import the **Validators** from the **@angular/forms** and we need to add this in the **ngOnInit** method

```\
  this.signupForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    gender: new FormControl('female'),
  });
```

here we are using the **Validators.required** to validate the form control and we are using the **Validators.email** to validate the email.

for displaying the validation error we need to use the **ngIf** directive.

```\
  <div *ngIf="signupForm.get('username')?.invalid && signupForm.get('username')?.touched">
    <p>Username is required</p>
  </div>

  <div *ngIf="signupForm.get('email')?.invalid && signupForm.get('email')?.touched">
    <p>Email is required</p>
  </div>
```

here we are using the **signupForm.get('username')?.invalid** to check the form control is invalid and we are using the **signupForm.get('username')?.touched** to check the form control is touched.

## pipes

this is used to transform the data.
Inbuild pipes are **uppercase**, **lowercase**, **date**, **currency**, **json**, **async**.

async pipe use in the webserver.

## HTTP

- we need to import the **HttpClientModule** in the **app.module.ts** file.

```ts
  .get(
    'https://angular-complete-guide-f1e24-default-rtdb.firebaseio.com/posts.json',
    {
      headers: new HttpHeaders({
      'Custom-Header': 'Kajamohan get',
      }),
      params: new HttpParams().set('custom', 'haiFriend'),

    }
  )

// THIS IS SAME AS

  .get(
  'https://angular-complete-guide-f1e24-default-rtdb.firebaseio.com/posts.json?custom=haiFriend'
  )


  // Sent more than one params

  let searchParams = new HttpParams();
  searchParams = searchParams.append('custom', 'hai');
  searchParams = searchParams.append('name', 'kajamohan');


  .get(
        'https://angular-complete-guide-f1e24-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({
            'Custom-Header': 'Kajamohan get',
          }),
          params: searchParams,
        }
      )
// THIS IS SAME AS

  .get(
  'https://angular-complete-guide-f1e24-default-rtdb.firebaseio.com/posts.json?custom=hai&name=kajamohan'
  )

```

- **GET THE SERVER RESPONSE ALL DETAILS** : we need to use `observe` in the **get()** of **post()** method.

```ts
  .get(
    'https://angular-complete-guide-f1e24-default-rtdb.firebaseio.com/posts.json',
    {
      headers: new HttpHeaders({
        'Custom-Header': 'Kajamohan get',
      }),
      params: searchParams,
      observe: 'response',
    }
  )
```

## Interceptors

- this will use to modify the request before it leaves the application.
- we need to create a new file called **auth.interceptor.ts** in the **auth** folder.

- in `auth.interceptor.ts` file

```ts
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from "@angular/common/http";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("Request is on its way");
    const modifiedRequest = req.clone({
      headers: req.headers.append("Auth", "xyz"),
    });
    return next.handle(modifiedRequest).pipe(
      tap((event) => {
        console.log(event);
        if (event.type === HttpEventType.Response) {
          console.log("Response arrived, body data: ");
          console.log(event.body);
        }
      })
    );
  }
}
```
