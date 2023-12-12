/// <reference types="@types/googlemaps" />
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapService } from '../map.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageCarouselDialogComponent } from '../image-carousel-dialog/image-carousel-dialog.component';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() sights!: any[];
  map: google.maps.Map | undefined;

  center: any = {
    lat: 38.7223,
    lng: -9.1393,
  };
  openInfoWindows: any[] = [];
  zoom = 9;

  constructor(
    private mapService: MapService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.mapService.focusOnSight$.subscribe((sight) => {
      this.focusOnSight(sight);
    });
  }

  onMapReady(map: google.maps.Map) {
    this.map = map;
  }

  focusOnSight(sight: any): void {
    this.center = {
      lat: sight.lat,
      lng: sight.lng,
    };
    this.zoomIn();
  }

  zoomIn() {
    const interval = setInterval(() => {
      if (this.zoom == 16) {
        clearInterval(interval);
        return;
      }

      if (this.zoom > 16) {
        this.zoom--;
      } else this.zoom++;
    }, 200);
  }

  onZoomChange(zoom: number) {
    this.zoom = zoom;
  }

  getImages(sight: any, infoWindow: any) {
    this.openInfoWindows.forEach((window) => window.close());
    this.openInfoWindows = [];
    this.openInfoWindows.push(infoWindow);

    // this.center = {
    //   lat: sight.lat + 0.001,
    //   lng: sight.lng,
    // };

    if (this.map)
      this.map.panTo({
        lat: sight.lat + 0.001,
        lng: sight.lng,
      });

    if (sight.images) return;

    const url = `https://www.googleapis.com/customsearch/v1`;
    const params = {
      key: 'AIzaSyD0uI1qpMLO7WBFF0yTsHe-Q00sGsuXP2I',
      cx: 'c6187a5772ddc4456',
      q: `${sight.name} ${sight.city}`,
      searchType: 'image',
      num: 8,
    };

    return this.http.get(url, { params }).subscribe((response: any) => {
      sight.images = response.items.map((item: any) => item.link);
    });
  }

  openImageCarouselDialog(images: string[]) {
    this.dialog.open(ImageCarouselDialogComponent, {
      data: { images },
    });
  }
}
