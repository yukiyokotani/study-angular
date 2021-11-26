import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BroadcastModule } from './broadcast/broadcast.module';
import { CustomMatcherComponent } from './custom-matcher/custom-matcher.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DynamicTabsComponent } from './dynamic-tabs/dynamic-tabs.component';
import { DynamicTabsDirective } from './dynamic-tabs/dynamic-tabs.directive';
import { TabComponent } from './dynamic-tabs/tab/tab.component';
import { TabsComponent } from './dynamic-tabs/tabs/tabs.component';
import { WineFormComponent } from './dynamic-tabs/wine/wine-form/wine-form.component';
import { WinesListComponent } from './dynamic-tabs/wine/wines-list/wines-list.component';
import { EmbeddedPageComponent } from './embedded-page/embedded-page.component';
import { HomeComponent } from './home/home.component';
import { IframeComponent } from './iframe/iframe.component';
import { ComponentDirective } from './nested-event-binding/component.directive';
import { NestedEventBindingComponent } from './nested-event-binding/nested-event-binding.component';
import { TestComponent } from './nested-event-binding/test/test.component';
import { MiliLiterPipe } from './pipes/mili-liter.pipe';
import { TodoEffects } from './todo-list/todo.effects';
import { TsClassSubscriptionComponent } from './ts-class-subscription/ts-class-subscription.component';
import { WebsocketComponent } from './websocket/websocket.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTabsComponent,
    DynamicTabsDirective,
    TabComponent,
    TabsComponent,
    WinesListComponent,
    WineFormComponent,
    WebsocketComponent,
    HomeComponent,
    HighlightDirective,
    MiliLiterPipe,
    IframeComponent,
    EmbeddedPageComponent,
    CustomMatcherComponent,
    TsClassSubscriptionComponent,
    NestedEventBindingComponent,
    ComponentDirective,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    ReactiveFormsModule,
    FlexLayoutModule,
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([TodoEffects]),
    NoopAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    BroadcastModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'ja' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
