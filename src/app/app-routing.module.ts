import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';

import { CustomMatcherComponent } from './custom-matcher/custom-matcher.component';
import { DynamicTabsComponent } from './dynamic-tabs/dynamic-tabs.component';
import { EmbeddedPageComponent } from './embedded-page/embedded-page.component';
import { HomeComponent } from './home/home.component';
import { IframeComponent } from './iframe/iframe.component';
import { NestedEventBindingComponent } from './nested-event-binding/nested-event-binding.component';
import { TsClassSubscriptionComponent } from './ts-class-subscription/ts-class-subscription.component';
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
    path: 'form',
    loadChildren: () => import('./form/form.module').then((m) => m.FormModule),
  },
  {
    path: 'form-with-ngx-mask',
    loadChildren: () =>
      import('./form-with-ngx-mask/form.module').then((m) => m.FormModule),
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
    path: 'ts-class-subscription',
    component: TsClassSubscriptionComponent,
  },
  {
    path: 'nested-event-binding',
    component: NestedEventBindingComponent,
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
