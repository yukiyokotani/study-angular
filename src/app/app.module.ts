import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DynamicTabsComponent } from './dynamic-tabs/dynamic-tabs.component';
import { DynamicTabsDirective } from './dynamic-tabs/dynamic-tabs.directive';
import { TabComponent } from './dynamic-tabs/tab/tab.component';
import { TabsComponent } from './dynamic-tabs/tabs/tabs.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { WinesListComponent } from './dynamic-tabs/wine/wines-list/wines-list.component';
import { WineFormComponent } from './dynamic-tabs/wine/wine-form/wine-form.component';
import { TodoEffects } from './todo-list/todo.effects';
import { EffectsModule } from '@ngrx/effects';
import { TodoModule } from './todo-list/todo.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTabsComponent,
    DynamicTabsDirective,
    TabComponent,
    TabsComponent,
    WinesListComponent,
    WineFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    ReactiveFormsModule,
    TodoModule,
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([TodoEffects]),
    NoopAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
