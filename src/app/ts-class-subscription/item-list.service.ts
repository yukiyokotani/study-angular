import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Item, ItemEvent } from './item';

@Injectable({
  providedIn: 'root',
})
export class ItemListService implements OnDestroy {
  itemEventSubscription = new Subscription();

  itemListSubject$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  constructor() {}

  get itemsListChanges(): Observable<Item[]> {
    return this.itemListSubject$.asObservable();
  }

  addItem(message: string): void {
    const current = this.itemListSubject$.getValue();
    const item = new Item(message);
    this.itemEventSubscription.add(
      item.itemEventSubject$
        .pipe(takeUntil(item.onDestroy$))
        .subscribe((event) => this.handleEvent(event))
    );
    this.itemListSubject$.next([...current, item]);
    this.log();
  }

  removeItem(id: string): void {
    const current = this.itemListSubject$.getValue();
    const targetIndex = current.findIndex((item) => item.id === id);
    if (targetIndex < 0) return;
    const removedItem = current.splice(targetIndex, 1);
    removedItem[0]?.destroy();
    this.itemListSubject$.next(current);
    this.log();
  }

  setItemMessage(id: string, message: string): void {
    const current = this.itemListSubject$.getValue();
    const targetItem = current.find((item) => item.id === id);
    if (!targetItem) return;
    targetItem.message = message;
    this.itemListSubject$.next(current);
  }

  ngOnDestroy(): void {
    this.itemEventSubscription.unsubscribe();
  }

  private handleEvent(event: ItemEvent): void {
    switch (event.type) {
      case 'itemSetMessage':
        this.setItemMessage(event.id, event.message);
        break;
      default:
        break;
    }
  }

  private log(): void {
    console.log('Item List\n', this.itemListSubject$.getValue());
    console.log('Subscription\n', this.itemEventSubscription);
  }
}
