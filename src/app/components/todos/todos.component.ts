import { Component, OnInit } from '@angular/core';
import { TodosService } from "../../services/todos.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

  todo: any[]
  done: any[]

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todo = this.todosService.todos.filter(todo => todo.status === false)
    this.done = this.todosService.todos.filter(todo => todo.status === true)
  }

  handleDone(id): void {
    this.todosService.markDone(id)
    this.todo = this.todosService.todos.filter(todo => todo.status === false)
    this.done = this.todosService.todos.filter(todo => todo.status === true)
  }

}
