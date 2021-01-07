import { NgModule } from '@angular/core';

import { ButtonModule } from './button/button.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
  declarations: [],
  imports: [ButtonModule, CheckboxModule, DialogModule],
  exports: [ButtonModule, CheckboxModule, DialogModule],
})
export class WebComponentsLibModule { }
