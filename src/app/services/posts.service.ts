import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getData() {
    let url = "https://reqres.in/api/unknown";
    return this.http.get(url)
  }

  getPosts() {
    let url = "http://localhost:3000/posts";
    return this.http.get(url)
  }

  getPostsById(postId) {
    let url = "http://localhost:3000/posts/"+postId;
    return this.http.get(url)
  }

}
