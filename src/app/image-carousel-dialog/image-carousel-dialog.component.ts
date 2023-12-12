import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-carousel-dialog',
  templateUrl: './image-carousel-dialog.component.html',
  styleUrls: ['./image-carousel-dialog.component.scss'],
})
export class ImageCarouselDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { images: string[] }) {}
}
