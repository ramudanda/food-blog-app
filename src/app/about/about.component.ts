import { Component , OnInit} from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
//import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
    constructor() { 
      let ContactComponentCop = new ContactComponent();
      console.log(ContactComponentCop.variableTest)
    }
    ngOnInit(): void {
    }
}
