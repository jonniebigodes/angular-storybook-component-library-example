import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [CounterButtonComponent],
  imports: [CommonModule, MatBadgeModule, MatButtonModule],
  exports: [CounterButtonComponent]
})
export class SuperDuperUiModule { }
