import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/app.component';
import { todoAnimation } from 'src/app/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    todoAnimation
  ]
})
export class TodoComponent implements OnInit {
  
  @Input() todo: Todo
  @Output() onTodoDelete: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  handleTodoDelete(id: number) {
    this.onTodoDelete.emit(id)
  }

}
