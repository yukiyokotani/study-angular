import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Item } from './item';
import { ItemListService } from './item-list.service';

@Component({
  templateUrl: './ts-class-subscription.component.html',
  styleUrls: ['./ts-class-subscription.component.scss'],
})
export class TsClassSubscriptionComponent implements OnInit, OnDestroy {
  itemListSubscription: Subscription;
  itemList: Item[] = [];

  constructor(private itemListService: ItemListService) {
    this.itemListSubscription = this.itemListService.itemsListChanges.subscribe(
      (itemList) => (this.itemList = itemList)
    );
  }

  addItem(): void {
    this.itemListService.addItem('Default Message');
  }

  removeItem(id: string): void {
    this.itemListService.removeItem(id);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.itemListSubscription.unsubscribe();
  }
}
