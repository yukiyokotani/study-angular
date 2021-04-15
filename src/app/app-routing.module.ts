import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTabsComponent } from './dynamic-tabs/dynamic-tabs.component';

const routes: Routes = [
  { path: 'dynamic-tabs', component: DynamicTabsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
