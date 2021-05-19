import { Component, OnInit, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component'
import { ContactComponent } from '../contact/contact.component';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post-modal',
  templateUrl: './add-post-modal.component.html',
  styleUrls: ['./add-post-modal.component.css'],
})

export class AddPostModalComponent implements OnInit{
      constructor(private router: Router, private getPosts:PostsService) {
        let ContactComponentCop = new ContactComponent(null);
        console.log(ContactComponentCop.variableTest);
      }
      ngOnInit(): void {}
}
