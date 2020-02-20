import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos: any[] = [
    {
      id: 1,
      text: 'Learn JS',
      status: true
    },
    {
      id: 2,
      text: 'Learn Dart',
      status: false
    },
    {
      id: 3,
      text: 'Make a todo list',
      status: true
    },
    {
      id: 4,
      text: 'Hello World',
      status: false
    },
    {
      id: 5,
      text: 'Hello',
      status: false
    }
  ]

  constructor() { }

  markDone(id) {
    this.todos.forEach(todo => {
      if(todo.id === id) {
        return todo.status = !todo.status
      }
    })
  }
}
