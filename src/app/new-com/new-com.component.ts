import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-com',
  template: `
  <h1>Hello {{ obj1.name }}</h1>
  
  `,
  styles: [`
  h1 {
    color: RED
  }
  `]
})
export class NewComComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit() {
  }
  
   obj1 = {
      name: 'Hero',
      age: 5
    }

}
