import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdcDrawerModule } from '@angular-mdc/web/drawer';
import { DrawerComponent } from './drawer.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DrawerComponent],
  imports: [CommonModule, MdcDrawerModule, MatIconModule],

  exports: [DrawerComponent, MdcDrawerModule, MatIconModule],
})
export class DrawerModule {}
