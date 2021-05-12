import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TodoListComponent } from './todo-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import todoSlice from './todoSlice';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(todoSlice.name, todoSlice.reducer),
    MatCardModule,
    FlexLayoutModule,
  ],
  declarations: [TodoListComponent],
  exports: [TodoListComponent],
})
export class TodoModule {}
