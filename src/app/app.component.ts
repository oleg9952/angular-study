import { Component } from '@angular/core';

export interface Todo {
  id: number;
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animations';

  todos: Array<Todo> = [
    { id: 1, name: 'Todo1' },
    { id: 2, name: 'Todo2' }
  ]

  addTodo(todoName: string): void {
    this.todos.unshift(<Todo>{
      id: this.todos.length ? this.todos[0].id + 1 : 1,
      name: todoName
    })
  }

  deleteTodo(id: number): void {
    const index = this.todos.findIndex(i => i.id === id)
    this.todos.splice(index, 1)
  }
}