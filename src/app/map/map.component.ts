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

  focusedSight: any;
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
    this.panToMarker(sight);
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

  async getAllImages() {
    // Crie um array de promessas, uma para cada chamada getImages
    const promises = this.sights.map((sight) => this.getImages(sight));

    // Espere todas as promessas serem resolvidas
    await Promise.all(promises);

    // Imprima a lista atualizada de sights
    console.log(this.sights);
  }

  panToMarker(sight: any) {
    this.focusedSight = sight;

    this.map?.panTo({
      lat: sight.lat + 0.001,
      lng: sight.lng,
    });
  }

  getImages(sight: any) {
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
