import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperDuperUiModule } from 'super-duper-ui';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SuperDuperUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
