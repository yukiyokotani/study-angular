import { Location, PopStateEvent } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  public count = 0;

  constructor(private location: Location) {
    this.location.subscribe((popStateEvent: PopStateEvent) => {
      if (popStateEvent.type === 'popstate') {
        this.location.replaceState(
          '/history',
          `count=${this.count.toString()}`,
          {
            test: true,
          }
        );
        console.log(popStateEvent);
      }
    });
  }

  public handleClick() {
    this.count += 1;
    this.location.go('/history', `count=${this.count.toString()}`, {
      test: true,
    });
  }
}
