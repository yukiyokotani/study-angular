import { createFeatureSelector } from '@ngrx/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos: () => {
      return;
    },
    createTodo: () => {
      return;
    },
    setTodo: (state, action: PayloadAction<Todo[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const selectTodos = createFeatureSelector<
  ReturnType<typeof todoSlice.reducer>
>(todoSlice.name);

export default todoSlice;
