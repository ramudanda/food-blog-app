import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-post-modal',
  templateUrl: './add-post-modal.component.html',
  styleUrls: ['./add-post-modal.component.css']
})

export class AddPostModalComponent implements OnInit {
  
  PostModelTittle = 'Add Post';

  constructor() {}

  ngOnInit(): void {
  }

}
