import { Component, OnInit } from '@angular/core';
import { TodosService } from "../../services/todos.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

  constructor(public todosService: TodosService) { }

  ngOnInit() {
  }

  handleDone(id): void {
    this.todosService.markDone(id)
  }
}
