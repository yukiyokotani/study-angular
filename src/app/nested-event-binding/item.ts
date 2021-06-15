import { EventEmitter, Type } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

export interface ComponentBase {
  id: string;
  message: string;
  setMessage: EventEmitter<string>;
}

export class Item {
  id: string;
  message: string;
  component: Type<ComponentBase>;

  constructor(message: string, component: Type<ComponentBase>) {
    this.id = uuidv4();
    this.message = message;
    this.component = component;
  }
}
