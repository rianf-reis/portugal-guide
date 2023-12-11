import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SightseeingListComponent } from './sightseeing-list/sightseeing-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SightseeingListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
