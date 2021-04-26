import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { Wine, WineFormComponent } from './wine/wine-form/wine-form.component';

@Component({
  templateUrl: './dynamic-tabs.component.html',
  styleUrls: ['./dynamic-tabs.component.css'],
})
export class DynamicTabsComponent {
  @ViewChild('about') aboutTemplate!: TemplateRef<unknown>;
  @ViewChild('wineEdit') wineEditTemplate!: TemplateRef<unknown>;
  @ViewChild(TabsComponent) tabsComponent!: TabsComponent;

  wines: Wine[] = [
    {
      id: 1,
      name: 'Romanee Conti',
      farm: 'DRC',
      vintage: '2016',
      size: 750,
      price: 3828000,
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
}
