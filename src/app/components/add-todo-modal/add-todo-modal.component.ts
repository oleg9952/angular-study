import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo-modal',
  templateUrl: './add-todo-modal.component.html',
  styleUrls: ['./add-todo-modal.component.sass']
})
export class AddTodoModalComponent implements OnInit {

  modalOpen: boolean = false;

  newTodoText: string = null;

  @Output() handleModal: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleNewTodo() {
    this.newTodoText = null;
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen
  }

}