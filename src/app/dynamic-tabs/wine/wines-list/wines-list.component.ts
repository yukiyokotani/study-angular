import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Wine } from '../wine-form/wine-form.component';

@Component({
  selector: 'app-wines-list',
  templateUrl: './wines-list.component.html',
  styleUrls: ['./wines-list.component.scss'],
})
export class WinesListComponent implements OnInit {
  @Input() wines?: Wine[];
  @Output() addWine = new EventEmitter<void>();
  @Output() editWine = new EventEmitter<Wine>();

  displayedColumns: string[] = [
    'position',
    'name',
    'farm',
    'vintage',
    'size',
    'price',
    'button',
  ];

  dataSource = new MatTableDataSource<Wine>();

  ngOnInit(): void {
    this.refresh(this.wines ?? []);
  }

  refresh(wines: Wine[]): void {
    this.dataSource.data = wines;
  }
}
