import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';

import { Item } from './item';

@Directive({
  selector: '[appComponent]',
})
export class ComponentDirective implements OnInit {
  @Input() item?: Item;
  @Input() setMessage?: (id: string, message: string) => void;

  constructor(
    public viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    if (!this.item) return;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.item?.component
    );
    const viewContainerRef = this.viewContainer;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance = componentRef.instance;
    instance.id = this.item.id;
    instance.message = this.item.message;
    instance.setMessage.subscribe((message: string) => {
      if (this.setMessage) {
        this.setMessage(instance.id, message);
      }
    });
  }
}
