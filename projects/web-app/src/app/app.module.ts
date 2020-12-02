import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { WebComponentsLibModule } from '@ilmn/components-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WebComponentsLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
