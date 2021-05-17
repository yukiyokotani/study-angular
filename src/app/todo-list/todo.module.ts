import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TodoListComponent } from './todo-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import todoSlice from './todoSlice';
import { TodoListRoutingModule } from './todo-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(todoSlice.name, todoSlice.reducer),
    FlexLayoutModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    TodoListRoutingModule,
  ],
  declarations: [TodoListComponent],
  exports: [TodoListComponent],
})
export class TodoModule {}
