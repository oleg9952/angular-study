import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo, StateInterface } from 'src/app/store/reducers/todos.reducer';
import { addTodo } from '../../store/actions/todos.actions';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit, OnDestroy {
  todosSub$: Observable<StateInterface>

  id: number = 1;
  message: string = '';

  constructor(private store: Store<{todos: StateInterface}>) { 
    this.todosSub$ = store.pipe(select('todos'));
  }

  ngOnInit(): void {
    this.todosSub$.subscribe((data: StateInterface) => {
      if (data.todos.length) {
        this.id = data.todos[data.todos.length - 1].id + 1;
      }
    })
  }

  ngOnDestroy(): void {
    this.todosSub$.subscribe();
  }

  handleNewTodo(message): void {
    const newTodo: Todo = {
      id: this.id,
      message,
      status: false,
      animateAdd: true,
      animateDel: false
    }

    if (message.length) {
      this.store.dispatch(addTodo({todo: newTodo}))
      this.message = '';
    }

  }
}
