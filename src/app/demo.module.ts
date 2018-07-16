import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
// import { BrowserModule } from '../../node_modules/@angular/platform-browser';

@NgModule({

  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule { }
