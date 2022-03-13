import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponentOutletParams<T> {
  public readonly params$ = new BehaviorSubject<T | undefined>(undefined);

  public get params(): T | undefined {
    return this.params$.getValue();
  }

  public set params(params: T | undefined) {
    this.params$.next(params);
  }
}
