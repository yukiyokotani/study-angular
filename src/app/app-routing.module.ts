import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTabsComponent } from './dynamic-tabs/dynamic-tabs.component';
import { WebsocketComponent } from './websocket/websocket.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IframeComponent } from './iframe/iframe.component';
import { EmbeddedPageComponent } from './embedded-page/embedded-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dynamic-tabs', component: DynamicTabsComponent },
  {
    path: 'todo-list',
    loadChildren: () =>
      import('./todo-list/todo.module').then((m) => m.TodoModule),
  },
  {
    path: 'lazy-load',
    loadChildren: () =>
      import('./lazy-load/lazy-load.module').then((m) => m.LazyLoadModule),
  },
  {
    path: 'websocket',
    component: WebsocketComponent,
  },
  {
    path: 'iframe',
    component: IframeComponent,
  },
  {
    path: 'embedded-page',
    component: EmbeddedPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
