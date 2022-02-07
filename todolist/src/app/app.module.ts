import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PirkiniaiComponent } from './pirkiniai/pirkiniai.component';

@NgModule({
  declarations: [
    AppComponent,
    PirkiniaiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
