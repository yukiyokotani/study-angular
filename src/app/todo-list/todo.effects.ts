import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import todoSlice from './todoSlice';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoSlice.actions.getTodos),
      mergeMap(() =>
        this.httpClient.get('http://localhost:8080/todos').pipe(
          map((todos) => ({
            type: todoSlice.actions.setTodo.type,
            payload: todos,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoSlice.actions.createTodo),
      mergeMap((action) => {
        const headers = new HttpHeaders({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-Type': 'application/json; charset=utf-8',
        });
        return this.httpClient
          .post(
            'http://localhost:8080/todos',
            JSON.stringify({ title: action.payload }),
            { headers }
          )
          .pipe(
            map((todos) => ({
              type: todoSlice.actions.setTodo.type,
              payload: todos,
            })),
            catchError(() => EMPTY)
          );
      })
    )
  );

  constructor(private actions$: Actions, private httpClient: HttpClient) {}
}
