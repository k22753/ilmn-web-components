import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleButtonComponent } from './simple-button.component';



@NgModule({
  declarations: [SimpleButtonComponent],
  imports: [
    CommonModule,

  ],

  exports: [
    SimpleButtonComponent
  ]
})
export class SimpleButtonModule { }
