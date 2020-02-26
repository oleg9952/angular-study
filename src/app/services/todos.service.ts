import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  modal: boolean = false

  // todos: any[] = [
  //   {
  //     id: 1,
  //     text: 'Learn JS',
  //     status: true
  //   },
  //   {
  //     id: 2,
  //     text: 'Learn Dart',
  //     status: false
  //   },
  //   {
  //     id: 3,
  //     text: 'Make a todo list',
  //     status: true
  //   },
  //   {
  //     id: 4,
  //     text: 'Hello World',
  //     status: false
  //   },
  //   {
  //     id: 5,
  //     text: 'Hello',
  //     status: false
  //   }
  // ]

  todos: any[] = []

  constructor() { }

  markDone(id: number) {
    this.todos.forEach(todo => {
      if(todo.id === id) {
        return todo.status = !todo.status
      }
    })
  }

  toggleModal() {
    this.modal = !this.modal
  }

  addNewTodo(todo: string): void {
    this.todos.push({
      id: this.todos.length !== 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todo,
      status: false,
      editTime: new Date().getTime()
    })
    this.todos.sort(this.sorter('editTime'))
    console.log(this.todos)
  }

  getDueTodos(): Array<object> {
    let due: Array<object> = []
    this.todos.filter(todo => {
      if(!todo.status) {
        due.push(todo)
      }
    })
    return due
  }

  getDoneTodos(): Array<object> {
    let due: Array<object> = []
    this.todos.filter(todo => {
      if(todo.status) {
        due.push(todo)
      }
    })
    return due
  }

  //---------- Sorting ----------

  sorter = selector => {
    return (a, b) => {
        if (a[selector] < b[selector]) {
          return -1;
        }
        if (a[selector] > b[selector]) {
          return 1;
        }
        return 0;
    }
  }
}
