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
    console.log(this.DefaultGender); // male

    /*
     * if we change the about value in the form
     * this will change because we are using two way binding
     * in the form html file we are using [(ngModel)]= "about" to bind the value
     */
    console.log(this.about);
  }
}
