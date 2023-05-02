import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent {
  DefaultGender: string = 'male'; // one way binding
  about = 'Tell about Your Self'; // two way binding

  submitted = false;
  user = {
    username: '',
    email: '',
    gender: '',
    about: '',
  };

  @ViewChild('formReference') signUpForm!: NgForm;

  constructor() {}

  formSubmit() {
    console.log('Form Submitted');

    /*
     * if we want to print we should pass the form reference in the
     * form html file other wise we should use @ViewChild to access this
     */
    // console.log(formReference.value);

    // using @ViewChild
    // console.log(this.signUpForm);

    /*
     * if we change the gender value to female in the form
     * this will not change because we are using one way binding
     * in the form html file we are using [ngModel]= "DefaultGender" to bind the value
     */
    // console.log(this.DefaultGender); // male

    /*
     * if we change the about value in the form
     * this will change because we are using two way binding
     * in the form html file we are using [(ngModel)]= "about" to bind the value
     */
    // console.log(this.about);

    // get the form values
    this.submitted = true;
    this.user.username = this.signUpForm.value.userNameAndEmailData.username;
    this.user.email = this.signUpForm.value.userNameAndEmailData.email;
    this.user.gender = this.signUpForm.value.gender;
    this.user.about = this.signUpForm.value.about;

    // reset the form
    this.signUpForm.reset();
  }

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

  fillSomeValues() {
    this.signUpForm.form.patchValue({
      userNameAndEmailData: {
        username: 'Niroshan',
        email: 'Niro@gmail.com',
      },
    });
  }
}
