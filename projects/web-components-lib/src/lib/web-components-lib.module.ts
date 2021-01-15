import { NgModule } from '@angular/core';

import { ButtonModule } from './button/button.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { DialogModule } from './dialog/dialog.module';
import { DrawerModule } from './drawer/drawer.module';

@NgModule({
  declarations: [],
  imports: [ButtonModule, CheckboxModule, DialogModule, DrawerModule],
  exports: [ButtonModule, CheckboxModule, DialogModule, DrawerModule],
})
export class WebComponentsLibModule {}
