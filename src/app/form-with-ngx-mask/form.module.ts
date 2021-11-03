import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';

import { FormWithNgxMaskRoutingModule } from './form-with-ngx-mask-routing.module';
import { FormComponent } from './form.component';
import { TrimValueDirective } from './trim-value.directive';

@NgModule({
  declarations: [FormComponent, TrimValueDirective],
  imports: [
    CommonModule,
    FormWithNgxMaskRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [DecimalPipe],
})
export class FormModule {}
