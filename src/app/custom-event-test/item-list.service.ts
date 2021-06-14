import { HostListener, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { Item, ItemField } from './item';

@Injectable({
  providedIn: 'root',
})
export class ItemListService implements OnDestroy {
  itemListSubscription!: Subscription;

  itemListSubject$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  constructor() {
    window.addEventListener('customEvent', (event: Event) => {
      console.log(event);
    });
  }

  get itemsListChanges(): Observable<Item[]> {
    return this.itemListSubject$.asObservable();
  }

  addItem(message: string): void {
    const current = this.itemListSubject$.getValue();
    const item = new Item(message);
    this.itemListSubject$.next([...current, item]);
  }

  removeItem(index: number): void {
    const current = this.itemListSubject$.getValue();
    current.filter((_, i) => i !== index);
    this.itemListSubject$.next([...current]);
  }

  ngOnDestroy(): void {
    this.itemListSubscription.unsubscribe();
  }
}
