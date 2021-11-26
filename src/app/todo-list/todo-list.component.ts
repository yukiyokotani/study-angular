import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { createSelector, Store } from '@ngrx/store';

import todoSlice, { Todo, selectTodos } from './todoSlice';

@Component({
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$ = this.store.select(createSelector(selectTodos, (state) => state));
  todo = new FormControl('', Validators.required);

  constructor(private readonly store: Store<Todo>) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.store.dispatch(todoSlice.actions.getTodos());
  }

  createTodo(): void {
    if (this.todo.invalid) return;
    this.store.dispatch(todoSlice.actions.createTodo(this.todo.value));
    this.todo.setValue('');
    this.todo.setErrors(null);
  }
}
