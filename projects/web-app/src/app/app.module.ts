import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { WebComponentsLibModule, DialogService } from '@ilmn/components-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MdcCheckboxModule } from '@angular-mdc/web/checkbox';
import { MdcFormFieldModule } from '@angular-mdc/web/form-field';
import { MdcSwitchModule } from '@angular-mdc/web/switch';
import { MdcRadioModule } from '@angular-mdc/web/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdcDialogModule } from '@angular-mdc/web/dialog';
import { MdcListModule } from '@angular-mdc/web/list';
import { MdcIconModule } from '@angular-mdc/web/icon';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WebComponentsLibModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MdcCheckboxModule,
    MdcFormFieldModule,
    MdcSwitchModule,
    MdcRadioModule,
    MdcDialogModule,
    MdcListModule,
    MdcIconModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
})
export class AppModule { }
