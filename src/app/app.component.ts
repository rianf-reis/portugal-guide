import { Component } from '@angular/core';
import lugares from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tour-guide';

  sights: any[] = lugares;
}
