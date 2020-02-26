import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() countryCode: any
  @Input() delay: string

  constructor() { }

  ngOnInit(): void {
    console.log(this.delay)
  }

}
