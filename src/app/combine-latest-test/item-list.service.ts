import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, combineLatest } from 'rxjs';

import { Item, ItemField } from './item';

@Injectable({
  providedIn: 'root',
})
export class ItemListService implements OnDestroy {
  itemsSubscription: Subscription;

  itemObservableList: Observable<Observable<ItemField>>[];
  itemList$: BehaviorSubject<Observable<ItemField>[]>;

  constructor() {
    this.itemObservableList = [];
    this.itemList$ = new BehaviorSubject<Observable<ItemField>[]>([]);
    this.itemsSubscription = combineLatest(this.itemObservableList).subscribe(
      (itemList) => {
        this.itemList$.next(itemList);
      }
    );
  }

  get itemsListChanges(): Observable<Observable<ItemField>[]> {
    return this.itemList$.asObservable();
  }

  addItem(itemField: ItemField): void {
    const item = new Item(itemField.id, itemField.message);
    const current = this.itemList$.getValue();
    this.itemList$.next([...current, item.item$.asObservable()]);
  }

  ngOnDestroy(): void {
    this.itemsSubscription.unsubscribe();
  }
}
