import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingTabComponent } from './routing-tab.component';

const routes: Routes = [{ path: '', component: RoutingTabComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyLoadRoutingModule {}
