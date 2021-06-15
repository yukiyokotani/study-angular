import { Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export interface ItemField {
  id: string;
  message: string;
}

export class Item {
  id: string;
  message: string;

  itemEventSubject$ = new Subject<ItemEvent>();
  onDestroy$ = new Subject();

  constructor(message: string) {
    this.id = uuidv4();
    this.message = message;
  }

  setMessage(message: string): void {
    this.itemEventSubject$.next({
      type: 'itemSetMessage',
      id: this.id,
      message,
    });
  }

  destroy(): void {
    this.onDestroy$.next();
  }
}

export type ItemEvent = ItemSetMessageEvent;

type ItemSetMessageEvent = {
  type: 'itemSetMessage';
  id: string;
  message: string;
};
