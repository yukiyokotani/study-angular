import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTabsComponent } from './dynamic-tabs/dynamic-tabs.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { WebsocketComponent } from './websocket/websocket.component';

const routes: Routes = [
  { path: 'dynamic-tabs', component: DynamicTabsComponent },
  { path: 'todo-list', component: TodoListComponent },
  {
    path: 'lazy-load',
    loadChildren: () =>
      import('./lazy-load/lazy-load.module').then((m) => m.LazyLoadModule),
  },
  {
    path: 'websocket',
    component: WebsocketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
