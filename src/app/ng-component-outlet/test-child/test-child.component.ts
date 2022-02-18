import { Component, OnInit } from '@angular/core';

import { ComponentOutletParams } from '../component-outlet-params.service';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss'],
})
export class TestChildComponent implements OnInit {
  constructor(private componentOutletParams: ComponentOutletParams) {}

  ngOnInit(): void {
    this.componentOutletParams.params$.subscribe((params) => {
      console.log(params);
    });
  }
}
