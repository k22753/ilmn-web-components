import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { WebComponentsLibModule } from '@ilmn/components-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MdcCheckboxModule } from '@angular-mdc/web/checkbox';
import { MdcFormFieldModule } from '@angular-mdc/web/form-field';
import { MdcSwitchModule } from '@angular-mdc/web/switch';
import { MdcRadioModule } from '@angular-mdc/web/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
