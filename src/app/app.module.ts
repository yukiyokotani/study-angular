import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicTabsComponent } from './dynamic-tabs/dynamic-tabs.component';
import { DynamicTabsDirective } from './dynamic-tabs/dynamic-tabs.directive';
import { TabComponent } from './dynamic-tabs/tab/tab.component';
import { TabsComponent } from './dynamic-tabs/tabs/tabs.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { WinesListComponent } from './dynamic-tabs/wine/wines-list/wines-list.component';
import { WineFormComponent } from './dynamic-tabs/wine/wine-form/wine-form.component';

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
    NoopAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
