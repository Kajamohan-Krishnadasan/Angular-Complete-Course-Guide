import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from './post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  postForm!: FormGroup;
  posts: Post[] = [];
  error: string = '';

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });

    this.onGetPosts();
  }

  onPostSubmit() {
    console.log('onPostSubmit');

    console.log(this.postForm.value);
    const postData = this.postForm.value;

    this.postService.onPostSubmit(postData).subscribe((res) => {
      console.log(res);
      this.onGetPosts();
    });
  }

  onGetPosts() {
    this.postService.onGetPosts().subscribe(
      (res) => {
        console.log(res);
        this.posts = res;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  onDeletePost(id: string) {
    this.postService.onDeletePost(id).subscribe((res) => {
      console.log(res);
      this.onGetPosts();
    });
  }

  onClearPosts() {
    console.log('onClearPosts');

    this.postService.onClearAllPosts().subscribe((res) => {
      console.log(res);
      this.onGetPosts();
    });
  }
}
