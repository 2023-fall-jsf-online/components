import { Component } from '@angular/core';

interface ToDoDisplay {
  name: string;
  done: boolean;
}
@Component({
  selector: 'app-bs-list-generator',
  templateUrl: './bs-list-generator.component.html',
  styleUrls: ['./bs-list-generator.component.css']
})
export class BsListGeneratorComponent   {

  constructor() {}

  ngOnInit(): void {

  }

  todos: ToDoDisplay[] = [
    {
      name: "Homework"
      , done: false
    }
    , {
      name: "Walk Dog"
      , done: true
    }
    , {
      name: "Get Groceries"
      , done: false
    }
    , {
      name: "Laundry"
      , done: false
    }
  ];

  // Need a property to bind to [(ngModel)] in the HTML input element...
  newToDoItemText = "";

  // And this set this.todos equal to a new array literal,
  // spreading the old todos in and adding a new one with
  // the input text...
  addItemToList = () => this.todos = [
    ...this.todos
    , {
      name: this.newToDoItemText
      , done: false
    }
  ];

}
