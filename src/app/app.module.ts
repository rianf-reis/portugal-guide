import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { SightseeingListComponent } from './sightseeing-list/sightseeing-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AppComponent, SightseeingListComponent, MapComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWkfdHfAmJdUtxdEIQWTETZkxc5Ykl7uU',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
