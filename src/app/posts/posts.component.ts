import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  postForm!: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });
  }

  onPostSubmit() {
    console.log(this.postForm.value);
    const postData = this.postForm.value;
    this.http
      .post(
        'https://angular-complete-guide-f1e24-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
