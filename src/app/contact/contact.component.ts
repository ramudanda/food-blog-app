import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

  variableTest:string;

  constructor() { 
     this.variableTest = "variableTestTesttt"
  }

  ngOnInit(): void {
    debugger
    console.log(this.variableTest)
  }

}