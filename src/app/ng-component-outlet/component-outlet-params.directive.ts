import { Directive, Input } from '@angular/core';

import { ComponentOutletParams } from './component-outlet-params.service';

@Directive({
  selector: '[appComponentOutletParams]',
  providers: [ComponentOutletParams],
})
export class ComponentOutletParamDirective<T> {
  constructor(private componentOutletParams: ComponentOutletParams<T>) {}

  @Input() set appComponentOutletParams(params: T | undefined) {
    this.componentOutletParams.params = params;
  }
}
