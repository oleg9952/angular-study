import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formState: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleForm(e: Event): void {
    if (e.target === e.currentTarget) {
      this.formState = !this.formState;
    };
  }

}
