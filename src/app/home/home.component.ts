import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  postsJson: any[] = [
    {
      "tittle":"Tittle1",
      "postedDate" : "Posted on January 1, 2021 by",
      "postedBy" : "phaniteja",
      "content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
    },
    {
      "tittle":"Tittle2",
      "postedDate" : "Posted on January 1, 2021 by",
      "postedBy" : "ramdeeepak",
      "content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
    },
    {
      "tittle":"Tittle3",
      "postedDate" : "Posted on January 1, 2021 by",
      "postedBy" : "dhulipalla",
      "content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.display_posts()
  }

  display_posts(){}

  add_post(){}
  
}
