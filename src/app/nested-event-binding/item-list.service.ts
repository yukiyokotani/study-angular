import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { Item } from './item';
import { TestComponent } from './test/test.component';

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
    const item = new Item(message, TestComponent);
    this.itemListSubject$.next([...current, item]);
  }

  removeItem(id: string): void {
    const current = this.itemListSubject$.getValue();
    current.filter((item) => item.id !== id);
    this.itemListSubject$.next([...current]);
  }

  setMessage(id: string, message: string): void {
    console.log(id, message);
    const current = this.itemListSubject$.getValue();
    const target = current.find((item) => item.id === id);
    if (target) {
      target.message = message;
    }
    this.itemListSubject$.next([...current]);
  }

  ngOnDestroy(): void {
    this.itemListSubscription.unsubscribe();
  }
}
