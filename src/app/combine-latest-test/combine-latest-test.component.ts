import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { MyItemField } from './item';
import { ItemListService } from './item-list.service';

@Component({
  templateUrl: './combine-latest-test.component.html',
  styleUrls: ['./combine-latest-test.component.css'],
})
export class CombineLatestTestComponent implements OnInit, OnDestroy {
  itemListSubscription: Subscription;
  itemList$: Observable<MyItemField>[] = [];

  constructor(private itemListService: ItemListService) {
    this.itemListSubscription = this.itemListService.itemsListChanges.subscribe(
      (itemList) => (this.itemList$ = itemList)
    );
  }

  addItem(): void {
    this.itemListService.addItem({ id: '001', message: 'Hello World' });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.itemListSubscription.unsubscribe();
  }
}
