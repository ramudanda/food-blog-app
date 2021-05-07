import { Component, OnInit } from '@angular/core';
/* import { HomeComponent } from '../home/home.component' */

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  te(postsJson){
    console.log(postsJson)
  }

}
