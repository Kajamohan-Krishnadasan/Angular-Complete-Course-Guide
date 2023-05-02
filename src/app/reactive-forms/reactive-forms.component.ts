import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];

  // create a form group
  signupForm!: FormGroup;

  restrictedNames = ['admin', 'user'];

  get hobbyControl() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  ngOnInit() {
    // create a form group
    // this.signupForm = new FormGroup({
    //   username: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   gender: new FormControl('female'),
    // });

    // if we use this we need to wrap username and email input into one div
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.isRestrictedNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.isRestricteEmail
        ),
      }),
      gender: new FormControl('female'),
      hobbies: new FormArray([]),
    });

    // Value changes
    // this will give us the value of the form if we change any value
    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value);
    });

    // Status changes
    // this will give us the status of the form if we change any value
    // status can be valid, invalid, pending
    this.signupForm.statusChanges.subscribe((status) => {
      console.log(status);
    });

    // set value
    // this will set the value of the form at the time of loading
    // here we need to pass all the values of the form
    // this.signupForm.setValue({
    //   userData: {
    //     username: 'Kajamohan',
    //     email: 'kaja@kaja.com',
    //   },
    //   gender: 'male',
    //   hobbies: [],
    // });

    // patch value
    // this will set the value of the form at the time of loading
    // here we need to pass only the values of the form that we want to change
    // this.signupForm.patchValue({
    //   userData: {
    //     username: 'Kajamohan',
    //   },
    //   gender: 'male',
    // });
  }

  onSubmit() {
    console.log(this.signupForm);

    // reset the form
    this.signupForm.reset();
  }

  addHobby() {
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // custom validation
  isRestrictedNames(control: FormControl) {
    if (this.restrictedNames.includes(control.value)) {
      return { nameIsRestricted: true };
    }
    return null;
  }

  // custom Asynchronous Validator
  isRestricteEmail(control: FormControl): Promise<any> | Observable<any> {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsRestricted: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });

    return promise;
  }
}
