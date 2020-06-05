import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() onNewTodo: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  handleNewTodo(e) {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.todoname.value.length) return
    this.onNewTodo.emit(form.todoname.value)
    form.reset()
  }
}
