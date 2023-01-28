import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(`${this._url}/posts`);
  }

  postMessage(postMsg: Post) {
    return this.http.post<Post>(`${this._url}/posts`, postMsg);
  }
}
