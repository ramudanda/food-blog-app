import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

  variableTest:string;

  constructor(private router: Router) { 
     this.variableTest = "variableTestTesttt"
  }

  ngOnInit(): void {
    debugger
    console.log(this.variableTest)
  }

  test(){
    this.router.navigateByUrl('')
  }

}