import {
  OnInit,
  Component,
  Input,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { MapService } from '../map.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ImageCarouselDialogComponent } from '../image-carousel-dialog/image-carousel-dialog.component';

@Component({
  selector: 'app-sightseeing-list',
  templateUrl: './sightseeing-list.component.html',
  styleUrls: ['./sightseeing-list.component.scss'],
})
export class SightseeingListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @Input('sights') allSights!: any[];
  sights = new MatTableDataSource();

  selectedRow: any;

  displayedColumns: string[] = ['photo', 'name', 'city', 'summary', 'reasons'];

  constructor(private mapService: MapService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.sights.data = this.allSights;
  }

  ngAfterViewInit(): void {
    this.sights.sort = this.sort;
  }

  focusOnSight(sight: any): void {
    this.mapService.focusOnSight(sight);
    this.selectedRow = sight;
  }

  openDialog(sight: any) {
    const dialogRef = this.dialog.open(ImageCarouselDialogComponent, {
      data: { images: sight.images },
    });
  }
}
