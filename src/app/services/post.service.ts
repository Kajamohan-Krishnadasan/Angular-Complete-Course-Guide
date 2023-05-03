import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Post } from '../posts/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  isLoading: boolean = false;
  constructor(private http: HttpClient) {}

  onGetPosts() {
    console.log('onGetPosts');
    let searchParams = new HttpParams();
    searchParams = searchParams.append('custom', 'hai');
    searchParams = searchParams.append('name', 'kajamohan');

    return this.http
      .get(
        'https://angular-complete-guide-f1e24-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({
            'Custom-Header': 'Kajamohan get',
          }),
          params: searchParams,
        }
      )
      .pipe(
        map((response: { [key: string]: Post }) => {
          let postsArray: Post[] = [];

          for (let key in response) {
            postsArray.push({ ...response[key], id: key });
          }
          return postsArray;
        })
      );
  }

  onPostSubmit(postData: Post) {
    console.log('onPostSubmit');
    this.isLoading = true;
    return this.http
      .post(
        'https://angular-complete-guide-f1e24-default-rtdb.firebaseio.com/posts.json',
        postData,
        {
          headers: new HttpHeaders({
            'Custom-Header': 'Kajamohan post',
          }),
          observe: 'response',
        }
      )
      .pipe(
        tap((res) => {
          // console.log('post tap res:', res);

          if (res.type === 4) {
            console.log('response received from server');
            this.isLoading = false;
          }
        })
      );
  }

  onGetPost() {
    console.log('onGetPost');
  }

  onUpdatePost() {
    console.log('onUpdatePost');
  }

  onDeletePost(id: string) {
    console.log('onDeletePost');

    return this.http
      .delete(
        `https://angular-complete-guide-f1e24-default-rtdb.firebaseio.com/posts/${id}.json`,
        {
          observe: 'events',
          responseType: 'text',
        }
      )
      .pipe(
        tap((res) => {
          // console.log('tap res:', res);
          if (res.type === 0) {
            console.log('request sent to server');
            this.isLoading = true;
          }

          if (res.type === 4) {
            console.log('response received from server');
            this.isLoading = false;
          }
        })
      );
  }

  onClearAllPosts() {
    console.log('onClearAllPosts');

    return this.http
      .delete(
        'https://angular-complete-guide-f1e24-default-rtdb.firebaseio.com/posts.json',
        {
          observe: 'events',
          responseType: 'text',
        }
      )
      .pipe(
        tap((res) => {
          // console.log('tap res:', res);
          if (res.type === 0) {
            console.log('request sent to server');
            this.isLoading = true;
          }

          if (res.type === 4) {
            console.log('response received from server');
            this.isLoading = false;
          }
        })
      );
  }
}
