import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  ContentChildren,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DynamicTabsDirective } from '../dynamic-tabs.directive';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements AfterContentInit {
  // 画面にマウントされているすべてのTabCompoennt (子コンポーネント)
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  // タブの中身を配置するコンテナ
  @ViewChild(DynamicTabsDirective) dynamicTabPlaceholder!: DynamicTabsDirective;
  // 動的に管理するTabComponentの配列
  dynamicTabs: TabComponent[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterContentInit(): void {
    console.log(this.tabs);
    const activeTabs = this.tabs?.filter((tab) => tab.active);
    if (activeTabs?.length === 0 && this.tabs !== undefined) {
      this.selectTab(this.tabs?.first);
    }
  }

  openTab(
    title: string,
    template: TemplateRef<unknown>,
    data: Record<string, unknown>,
    isCloseable: boolean
  ): void {
    // TabComponentのcomponent factoryを作る
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      TabComponent
    );
    // anchor directiveによってタブの中身を配置するコンテナを取得
    const vieContainerRef = this.dynamicTabPlaceholder.viewContainer;
    // componentのインスタンスを取得
    const componentRef = vieContainerRef.createComponent(componentFactory);
    // インスタンスにデータをセット
    const instance = componentRef.instance;
    instance.title = title;
    instance.template = template;
    instance.dataContext = data;
    instance.isCloseable = isCloseable;
    // Tabナビゲーションに表示するために、dynamicTabs配列へpush
    this.dynamicTabs.push(instance);
    // 追加したTabを開く
    this.selectTab(this.dynamicTabs[this.dynamicTabs.length - 1]);
  }

  selectTab(selectedTab: TabComponent): void {
    // 一旦すべてのタブを非アクティブ化
    this.tabs?.toArray().forEach((tab) => (tab.active = false));
    this.dynamicTabs.forEach((tab) => (tab.active = false));
    // 選択されたタブをアクティブ化
    selectedTab.active = true;
    console.log('tabs: ', this.tabs, 'dynamic tabs: ', this.dynamicTabs);
  }

  closeTab(closedTab: TabComponent) {
    for (let i = 0; i < this.dynamicTabs.length; i++) {
      if (this.dynamicTabs[i] === closedTab) {
        // dynamicTabsから削除
        this.dynamicTabs.splice(i, 1);
        // コンテナからタブを削除
        this.dynamicTabPlaceholder.viewContainer.remove(i);
        // 1番目のタブを選択
        this.selectTab(this.tabs.first);
        break;
      }
    }
  }

  closeActiveTab() {
    const activeTabs = this.dynamicTabs.filter((tab) => tab.active);
    if (activeTabs.length > 0) {
      this.closeTab(activeTabs[0]);
    }
  }
}
