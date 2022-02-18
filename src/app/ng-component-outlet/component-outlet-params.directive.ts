import { Directive, Input } from '@angular/core';

import { ComponentOutletParams } from './component-outlet-params.service';

@Directive({
  selector: '[appComponentOutletParams]',
  providers: [
    { provide: ComponentOutletParams, useValue: new ComponentOutletParams() },
  ],
})
export class ComponentOutletParamDirective {
  constructor(private componentOutletParams: ComponentOutletParams) {}

  @Input() set appComponentOutletParams(
    params: Record<string, unknown> | undefined
  ) {
    this.componentOutletParams.params$.next(params ?? {});
  }
}
