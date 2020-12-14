import { NgModule } from '@angular/core';

import { ButtonModule } from './button/button.module';
import { CheckboxModule } from './checkbox/checkbox.module';

@NgModule({
  declarations: [],
  imports: [ButtonModule, CheckboxModule],
  exports: [ButtonModule, CheckboxModule],
})
export class WebComponentsLibModule {}
