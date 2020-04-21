import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo, StateInterface } from './store/reducers/todos.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  todosSub$: Observable<StateInterface>;
  todos: Array<Todo> = null;

  constructor(private store: Store<{todos: StateInterface}>) {
    this.todosSub$ = store.pipe(select('todos'));     
  }

  ngOnInit() {
    this.todosSub$.subscribe((data: StateInterface): void => {
      this.todos = data['todos'];
    }) 
  }
  ngOnDestroy() {
    this.todosSub$.subscribe();
  }
}
