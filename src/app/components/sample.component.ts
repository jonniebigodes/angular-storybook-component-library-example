import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `
    <div style="text-align:center; padding: 20px;">
      <ui-counter-button
        (countChanged)="handleCountChanged($event)"
      ></ui-counter-button>
      <div>The current count is {{ currentCount }}!</div>
    </div>
  `
})
export class SampleComponent implements OnInit {
  currentCount = 0;

  handleCountChanged(e) {
    this.currentCount = e;
  }

  constructor() {}

  ngOnInit() {}
}
