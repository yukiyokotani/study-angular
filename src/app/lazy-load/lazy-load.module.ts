import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { LazyLoadRoutingModule } from './lazy-load-routing.module';
import { LazyLoadComponent } from './lazy-load.component';

@NgModule({
  declarations: [LazyLoadComponent],
  imports: [
    CommonModule,
    LazyLoadRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
})
export class LazyLoadModule {}
