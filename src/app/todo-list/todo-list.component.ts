import { Component, OnInit } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import todoSlice, { Todo, selectTodos } from './todoSlice';

@Component({
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos$ = this.store.select(createSelector(selectTodos, (state) => state));

  constructor(private readonly store: Store<Todo>) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.store.dispatch(todoSlice.actions.getTodos());
  }
}
