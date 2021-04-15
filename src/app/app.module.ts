import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicTabsComponent } from './dynamic-tabs/dynamic-tabs.component';
import { DynamicTabsDirective } from './dynamic-tabs/dynamic-tabs.directive';
import { TabComponent } from './dynamic-tabs/tab/tab.component';
import { TabsComponent } from './dynamic-tabs/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTabsComponent,
    DynamicTabsDirective,
    TabComponent,
    TabsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
