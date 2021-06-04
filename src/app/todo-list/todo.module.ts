import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import todoSlice from './todoSlice';

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
