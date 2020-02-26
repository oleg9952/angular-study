import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {

  delay: number = 0

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData()
  }

  getDelay(): string {
    this.delay = this.delay + 60
    return this.delay.toString()
  }

}
