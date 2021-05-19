import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  /* getData() {
    let url = "https://reqres.in/api/unknown";
    return this.http.get(url)
  } */

  getPosts() {
    let url = "http://localhost:3000/posts";
    return this.http.get(url)
  }

  getPostsById(postId) {
    let url = "http://localhost:3000/posts/"+postId;
    return this.http.get(url)
  }

  savePost(requestObject){
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = requestObject;
    let url = "http://localhost:3000/posts";
    return this.http.post<any>(url ,body, { headers })
  }

  updatePostById(requestObject,postId,){
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = requestObject;
    let url = "http://localhost:3000/posts/"+postId;
    return this.http.put<any>(url ,body, { headers })
  }

  deletePostById(postId) {
    let url = "http://localhost:3000/posts/"+postId;
    return this.http.delete(url)
  }

}
