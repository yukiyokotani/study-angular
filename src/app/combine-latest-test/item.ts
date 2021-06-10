import { BehaviorSubject, Observable } from 'rxjs';

export interface MyItemField {
  id: string;
  message: string;
}

export class MyItem {
  myItem$: BehaviorSubject<MyItemField>;

  constructor(id: string, message: string) {
    this.myItem$ = new BehaviorSubject({ id, message });
  }

  get myItemChanges(): Observable<MyItemField> {
    return this.myItem$.asObservable();
  }

  // setMessage(newMessage: string): void {
  //   const current = this.myItem$.getValue();
  //   this.myItem$.next({ ...current, message: newMessage });
  // }
}
