import { OnInit, Component, Input } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-sightseeing-list',
  templateUrl: './sightseeing-list.component.html',
  styleUrls: ['./sightseeing-list.component.scss'],
})
export class SightseeingListComponent implements OnInit {
  @Input() sights!: any[];

  displayedColumns: string[] = [
    // 'photos',
    'name',
    'city',
    'summary',
    'reasons',
  ];

  constructor(private mapService: MapService) {}

  ngOnInit(): void {}

  focusOnSight(sight: any): void {
    this.mapService.focusOnSight(sight);
  }
}
