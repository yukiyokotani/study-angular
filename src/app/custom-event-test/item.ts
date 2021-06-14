import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { ItemListService } from './item-list.service';

export interface ItemField {
  id: string;
  message: string;
}

export class Item {
  id: string;
  message: string;

  constructor(message: string) {
    this.id = uuidv4();
    this.message = message;
  }

  handleClick(): void {
    window.dispatchEvent(
      new CustomEvent('customEvent', {
        bubbles: true,
        detail: {
          id: this.id,
        },
      })
    );
  }
}
