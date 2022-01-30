import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { InputFormComponent } from './input-form/input-form.component';
import { SudetisComponent } from './sudetis/sudetis.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    InputFormComponent,
    SudetisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
