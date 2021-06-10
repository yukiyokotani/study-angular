import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, combineLatest } from 'rxjs';

import { MyItem, MyItemField } from './item';

@Injectable({
  providedIn: 'root',
})
export class ItemListService implements OnDestroy {
  itemsSubscription: Subscription;

  itemObservableList: Observable<Observable<MyItemField>>[];
  itemList$: BehaviorSubject<Observable<MyItemField>[]>;

  constructor() {
    this.itemObservableList = [];
    this.itemList$ = new BehaviorSubject<Observable<MyItemField>[]>([]);
    this.itemsSubscription = combineLatest(this.itemObservableList).subscribe(
      (itemList) => {
        this.itemList$.next(itemList);
      }
    );
  }

  get itemsListChanges(): Observable<Observable<MyItemField>[]> {
    return this.itemList$.asObservable();
  }

  addItem(itemField: MyItemField): void {
    const item = new MyItem(itemField.id, itemField.message);
    const current = this.itemList$.getValue();
    this.itemList$.next([...current, item.myItem$.asObservable()]);
  }

  ngOnDestroy(): void {
    this.itemsSubscription.unsubscribe();
  }
}
