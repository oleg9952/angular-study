import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  codes: Array<object> = null
  searchResults: Array<object> = null

  constructor() { }

  getData(): void {
    fetch('https://oleg9952.github.io/json-placeholders/country-codes.json')
      .then(resp => resp.json())
      .then(data => this.codes = data)
      .catch(err => console.error(err))
  }

  outputData(): Array<object> {
    if(this.searchResults) {
      return this.searchResults
    } else {
       return this.codes
    }
  }

  searchCodes(input: string): void {
    if(input.length === 0) {
      this.searchResults = null
    } else {
      this.searchResults = this.codes.filter(item => {
        if(item['name'].toLowerCase().indexOf(input.toLowerCase()) !== -1) {
          return item
        }
      })
    }
  }
}
