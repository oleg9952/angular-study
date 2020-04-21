import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/store/reducers/todos.reducer';
import { Store } from '@ngrx/store';
import { markDone, delTodo, delEnterAnim } from '../../store/actions/todos.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  todoState: boolean = false;

  constructor(private store: Store<{ todos: Array<Todo> }>) {
  }

  ngOnInit(): void {
    
  }

  show(): void {
    this.todoState = true;
  }

  hide(): void {
    this.todoState = false;
  }

  handleDone(todoID: number): void {
    this.store.dispatch(markDone({id: todoID}));
    this.hide();
  }

  handleDelete(todoID: number): void {
    this.store.dispatch(delTodo({id: todoID}));
    this.hide();
  }

}
