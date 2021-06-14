import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Item, ItemField } from './item';
import { ItemListService } from './item-list.service';

@Component({
  templateUrl: './custom-event-test.component.html',
  styleUrls: ['./custom-event-test.component.css'],
})
export class CustomEventTestComponent implements OnInit, OnDestroy {
  itemListSubscription: Subscription;
  itemList: Item[] = [];

  constructor(private itemListService: ItemListService) {
    this.itemListSubscription = this.itemListService.itemsListChanges.subscribe(
      (itemList) => (this.itemList = itemList)
    );
  }

  addItem(): void {
    this.itemListService.addItem('Hello World');
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.itemListSubscription.unsubscribe();
  }
}
