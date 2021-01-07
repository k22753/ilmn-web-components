import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdcDialogModule } from '@angular-mdc/web/dialog';

import { DialogComponent } from './dialog.component';

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, MdcDialogModule],

  exports: [DialogComponent, MdcDialogModule],
})
export class DialogModule {}
