import { Component, Input, OnInit } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() sights!: any[];

  zoom = 9;
  latitude = 38.7223;
  longitude = -9.1393;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.mapService.focusOnSight$.subscribe((sight) => {
      this.focusOnSight(sight);
    });
  }

  focusOnSight(sight: any): void {
    this.latitude = sight.lat;
    this.longitude = sight.lng;
    this.zoomIn();
  }

  zoomIn() {
    const interval = setInterval(() => {
      // Pare o zoom quando atingir o nível de zoom desejado
      if (this.zoom >= 16) {
        clearInterval(interval);
      } else this.zoom++;
    }, 200);
  }
}
