import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentBase } from '../item';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements ComponentBase, OnInit {
  @Input() id!: string;
  @Input() message!: string;
  @Output() setMessage = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleClick(): void {
    this.setMessage.emit('test message');
  }
}
