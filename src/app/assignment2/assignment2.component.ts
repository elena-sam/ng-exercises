import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
})
export class Assignment2Component {
  username: string;
  constructor() { }

  emptyString(): void {
    this.username = "";
  }
}
