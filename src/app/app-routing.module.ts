import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';

import { CombineLatestTestComponent } from './combine-latest-test/combine-latest-test.component';
import { CustomMatcherComponent } from './custom-matcher/custom-matcher.component';
import { DynamicTabsComponent } from './dynamic-tabs/dynamic-tabs.component';
import { EmbeddedPageComponent } from './embedded-page/embedded-page.component';
import { HomeComponent } from './home/home.component';
import { IframeComponent } from './iframe/iframe.component';
import { WebsocketComponent } from './websocket/websocket.component';

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
  {
    path: 'combine-latest',
    component: CombineLatestTestComponent,
  },
  {
    matcher: (url) => {
      if (url[0].path.match(/^custom-matcher$/)) {
        //\/[0-9a-zA-Z]+$
        return {
          consumed: url,
          posParams:
            url.length === 1
              ? undefined
              : {
                  rest: new UrlSegment(url[1].path, {}),
                },
        };
      }
      return null;
    },
    data: {
      message: 'This is a extra data',
      component: WebsocketComponent,
    },
    component: CustomMatcherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
