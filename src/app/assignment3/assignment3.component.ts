import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.scss']
})
export class Assignment3Component {
  clicks: number[] = [];
  constructor() { }

  countClicks() {
    this.clicks.push(this.clicks[0]?this.clicks[this.clicks.length - 1 ] +1:1);

  }
}
