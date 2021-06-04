import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { TabsComponent } from './tabs/tabs.component';
import { Wine } from './wine/wine-form/wine-form.component';
import { WinesListComponent } from './wine/wines-list/wines-list.component';

@Component({
  templateUrl: './dynamic-tabs.component.html',
  styleUrls: ['./dynamic-tabs.component.css'],
})
export class DynamicTabsComponent {
  @ViewChild('about') aboutTemplate!: TemplateRef<unknown>;
  @ViewChild('wineEdit') wineEditTemplate!: TemplateRef<unknown>;
  @ViewChild(TabsComponent) tabsComponent!: TabsComponent;
  @ViewChild(WinesListComponent) winesListComponent!: WinesListComponent;

  wines: Wine[] = [
    {
      id: 1,
      name: 'Romanee Conti',
      farm: 'DRC',
      vintage: '2016',
      size: 750,
      price: 3828000,
    },
    {
      id: 2,
      name: 'Future Wine',
      farm: 'Miracle Future Farm',
      vintage: '2895',
      size: 900,
      price: 13500000000,
    },
    {
      id: 3,
      name: 'Old Wine',
      farm: 'Old Farm',
      vintage: '351',
      size: 38,
      price: 489000000,
    },
  ];

  onOpenAbout(): void {
    this.tabsComponent.openTab('About', this.aboutTemplate, {}, true);
  }

  onAddWine(): void {
    this.tabsComponent.openTab('Add Wine', this.wineEditTemplate, {}, true);
  }

  onEditWine(wine: Wine): void {
    this.tabsComponent.openTab(
      `Editing ${wine.name}`,
      this.wineEditTemplate,
      wine,
      true
    );
  }

  onWineFormSubmit(dataModel: Wine) {
    if (dataModel.id > 0) {
      this.wines = this.wines.map((wine) => {
        if (wine.id === dataModel.id) {
          return dataModel;
        } else {
          return wine;
        }
      });
    } else {
      // create a new one
      dataModel.id = this.wines[this.wines.length - 1].id + 1;
      this.wines.push(dataModel);
    }

    // close the tab
    this.tabsComponent.closeActiveTab();
    this.winesListComponent.refresh(this.wines);
  }
}
