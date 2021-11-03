import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { TodoListRoutingModule } from '../todo-list/todo-list-routing.module';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { TrimDateDirective } from './trim-date.directive';
import { TrimNumberDirective } from './trim-number.directive';
import { TrimValueDirective } from './trim-value.directive';
import { TrimCustomValueDirective } from './trimu-custom-value.directive';

@NgModule({
  declarations: [
    FormComponent,
    TrimValueDirective,
    TrimCustomValueDirective,
    TrimNumberDirective,
    TrimDateDirective,
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    TodoListRoutingModule,
  ],
})
export class FormModule {}
