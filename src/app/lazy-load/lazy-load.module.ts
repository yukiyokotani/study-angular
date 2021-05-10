import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadRoutingModule } from './lazy-load-routing.module';
import { LazyLoadComponent } from './lazy-load.component';

@NgModule({
  declarations: [LazyLoadComponent],
  imports: [CommonModule, LazyLoadRoutingModule],
})
export class LazyLoadModule {}
