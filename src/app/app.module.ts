import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouters } from './app.routers';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouters,
    CommonModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
