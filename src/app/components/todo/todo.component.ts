import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoState: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  show(): void {
    this.todoState = true;
  }

  hide(): void {
    this.todoState = false;
  }

  handleDone(id: number): void {
    console.log('x')
    this.hide();
  }

  handleDelete(id: number): void {
    this.hide();
  }

}
