import { Component, OnInit,ViewChild,Output,EventEmitter } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Posts } from '../Models/posts.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

      dataById: any[];
      postId: any[];
      tittleToDisplay: string;
      isAddForm = true;
      postsJson;

      postObj : Posts = {
        id: 0,
        tittle: '',
        content: '',
        postedDate: '',
        postedBy: ''
      }

      @ViewChild('closebutton') closebutton;
      
      constructor(private getPosts:PostsService) { }

      /* ng OnInit */
      ngOnInit(): void {
        this.getPostData();
      }

      /* Add Post on click */
      addPostOnClick(){
        this.tittleToDisplay = "Add Post";
        this.isAddForm = true;
        this.postObj.tittle = "";
        this.postObj.content = "";
      }

      /* Get Post Data */
      getPostData(){
        this.getPosts.getPosts().subscribe((data: any[])=>{
          this.postsJson = data;
        });
      }

      /* Edit post on click */
      editPostOnClick(currentPostData){
        this.tittleToDisplay = "Edit Post";
        this.isAddForm = false;
        this.postId = currentPostData.id;
        this.getPosts.getPostsById(this.postId).subscribe((data: Posts[])=>{
          this.dataById = data;
          this.postObj.tittle = data['tittle'];
          this.postObj.content = data['content'];
        });
      }

      /* Save Form */
      onSubmit(value) { 
          let savePostRequest = {
            "tittle": "",
            "postedDate": "Posted on January 1, 2021 by",
            "postedBy": "ramdeeepak",
            "content": ""
          }
          savePostRequest.tittle = value.tittle;
          savePostRequest.content = value.content;
          savePostRequest.postedDate = this.getPostedDateTodisplay();
          if(this.isAddForm){
              this.getPosts.savePost(savePostRequest).subscribe(data=>{
                this.closebutton.nativeElement.click();
                this.getPostData();
              });
          }else{
              this.getPosts.updatePostById(savePostRequest,this.postId).subscribe(data=>{
                this.closebutton.nativeElement.click();
                this.getPostData();
              });
          }
      }

      /* Delete Post */
      delete_post(currentPostData){
        this.postId = currentPostData.id;
        this.getPosts.deletePostById(this.postId).subscribe((data: any[])=>{
          this.getPostData()
        });
      }

      getPostedDateTodisplay(){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let formtatedDate =  mm + '-' + dd + '-' + yyyy;
        return formtatedDate;
      }

}
