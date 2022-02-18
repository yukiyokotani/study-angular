import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponentOutletParams {
  public params$ = new BehaviorSubject<Record<string, unknown>>({});
}
