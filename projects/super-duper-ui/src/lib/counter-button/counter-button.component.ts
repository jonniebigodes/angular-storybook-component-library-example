import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'ui-counter-button',
  template: `
  <button type="button" id="lib-counter-button" mat-raised-button color="primary" [matBadge]="clickCount" matBadgeColor="accent" [matBadgeHidden]="clickCount === 0"
  (click)="handleButtonClick()">Click Me!</button>
  `,
})
export class CounterButtonComponent implements OnInit {

  @Output() countChanged: EventEmitter<number> = new EventEmitter();
  clickCount = 0;

  constructor() {}

  ngOnInit() {}

  /**
   * Increments the count when the button is clicked and emits an event
   * to notify parent component of new count value
   */
  handleButtonClick() {
    this.clickCount++;
    this.countChanged.emit(this.clickCount);
  }

}
