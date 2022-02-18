import { Component, OnInit } from '@angular/core';

import { TestChildComponent } from './test-child/test-child.component';

@Component({
  selector: 'app-ng-component-outlet',
  templateUrl: './ng-component-outlet.component.html',
  styleUrls: ['./ng-component-outlet.component.scss'],
})
export class NgComponentOutletComponent implements OnInit {
  public component = TestChildComponent;
  public params: Record<string, unknown>;

  constructor() {
    this.params = { time: new Date().toLocaleTimeString() };
  }

  ngOnInit(): void {
    setInterval(() => {
      this.params = { time: new Date().toLocaleTimeString() };
    }, 2000);
  }
}
