import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ManosAfrmModule } from "manos-afrm";
// import { FramesComponent } from "manos-afrm";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ManosAfrmModule,
    // FramesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
