import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-add-todo-modal',
  templateUrl: './add-todo-modal.component.html',
  styleUrls: ['./add-todo-modal.component.sass']
})
export class AddTodoModalComponent implements OnInit {

  newTodoText: string = null;

  constructor(
    public todosService: TodosService
  ) { }

  ngOnInit(): void {
  }

  handleNewTodo(todo) {
    this.todosService.addNewTodo(todo)
    this.todosService.toggleModal()
    this.newTodoText = null;
  }

}