import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { LazyLoadRoutingModule } from './routing-tab-routing.module';
import { RoutingTabComponent } from './routing-tab.component';
@NgModule({
  declarations: [RoutingTabComponent],
  imports: [
    CommonModule,
    LazyLoadRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTabsModule,
  ],
})
export class LazyLoadModule {}
