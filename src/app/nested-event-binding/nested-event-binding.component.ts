import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Item } from './item';
import { ItemListService } from './item-list.service';

@Component({
  templateUrl: './nested-event-binding.component.html',
  styleUrls: ['./nested-event-binding.component.scss'],
})
export class NestedEventBindingComponent implements OnInit, OnDestroy {
  itemListSubscription: Subscription;
  itemList: Item[] = [];

  constructor(private itemListService: ItemListService) {
    this.itemListSubscription = this.itemListService.itemsListChanges.subscribe(
      (itemList) => (this.itemList = itemList)
    );
    console.log(this.itemListService);
  }

  addItem(): void {
    console.log(this.itemListService);
    this.itemListService.addItem('Hello World');
  }

  setMessage = (id: string, message: string) => {
    this.itemListService.setMessage(id, message);
  };

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.itemListSubscription.unsubscribe();
  }
}
