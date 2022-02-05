import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RezervuarasComponent } from './rezervuaras/rezervuaras.component';

@NgModule({
  declarations: [
    AppComponent,
    RezervuarasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
