import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTabsComponent } from './dynamic-tabs/dynamic-tabs.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: 'dynamic-tabs', component: DynamicTabsComponent },
  { path: 'todo-list', component: TodoListComponent },
  {
    path: 'lazy-load',
    loadChildren: () =>
      import('./lazy-load/lazy-load.module').then((m) => m.LazyLoadModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
