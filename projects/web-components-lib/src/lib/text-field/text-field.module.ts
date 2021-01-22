import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdcTextFieldModule} from '@angular-mdc/web/textfield';

import { TextFieldComponent } from './text-field.component';

@NgModule({
  declarations: [TextFieldComponent],
  imports: [CommonModule, MdcTextFieldModule],

  exports: [TextFieldComponent, MdcTextFieldModule],
})
export class TextFieldModule {}
