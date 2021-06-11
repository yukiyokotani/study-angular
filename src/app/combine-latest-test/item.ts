import { BehaviorSubject, Observable } from 'rxjs';

export interface ItemField {
  id: string;
  message: string;
}

export class Item {
  item$: BehaviorSubject<ItemField>;

  constructor(id: string, message: string) {
    this.item$ = new BehaviorSubject({ id, message });
  }

  get itemChanges(): Observable<ItemField> {
    return this.item$.asObservable();
  }

  setMessage(newMessage: string): void {
    const current = this.item$.getValue();
    this.item$.next({ ...current, message: newMessage });
  }
}
