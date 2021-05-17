import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  postsJson: any[];
  dataById: any[];
  postId: any[];
  tittleToDisplay: string;

  constructor(public getPosts:PostsService) { }

  ngOnInit(): void {
    this.getPosts.getPosts().subscribe((data: any[])=>{
      this.postsJson = data;
    });
  }

  addPostOnClick(){
    debugger
    this.tittleToDisplay = "Add Post";
  }

  editPostOnClick(currentPostData){
    this.tittleToDisplay = "Edit Post";
    this.postId = currentPostData.id;
    this.getPosts.getPostsById(this.postId).subscribe((data: any[])=>{
      this.dataById = data;
      console.log(this.dataById)
    });
  }

}
