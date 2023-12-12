import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private focusOnSightSubject = new Subject<any>();
  focusOnSight$ = this.focusOnSightSubject.asObservable();

  focusOnSight(sight: any): void {
    this.focusOnSightSubject.next(sight);
  }
}
