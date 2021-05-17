import { Component, OnInit, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component'
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-add-post-modal',
  templateUrl: './add-post-modal.component.html',
  styleUrls: ['./add-post-modal.component.css']
})

export class AddPostModalComponent implements OnInit {

  PostModelTittleAdd = 'Add Post';
  PostModelTittleEdit = 'Edit Post';

  PostModelTittleEditInput = "Tittle1";
  PostModelContentEditInput = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!";

  constructor() {
    let ContactComponentCop = new ContactComponent();
    console.log(ContactComponentCop.variableTest)
  }

  ngOnInit(): void {}

}
