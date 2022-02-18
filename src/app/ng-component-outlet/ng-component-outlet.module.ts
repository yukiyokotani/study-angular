import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentOutletParamDirective } from './component-outlet-params.directive';
import { NgComponentOutletRoutingModule } from './ng-component-outlet-routing.module';
import { NgComponentOutletComponent } from './ng-component-outlet.component';
import { TestChildComponent } from './test-child/test-child.component';

@NgModule({
  declarations: [
    NgComponentOutletComponent,
    ComponentOutletParamDirective,
    TestChildComponent,
  ],
  imports: [CommonModule, NgComponentOutletRoutingModule],
})
export class NgComponentOutletModule {}
