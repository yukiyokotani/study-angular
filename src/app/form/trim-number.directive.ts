import {
  Directive,
  HostListener,
  forwardRef,
  Provider,
  Input,
} from '@angular/core';
import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const TRIM_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TrimNumberDirective),
  multi: true,
};

/**
 * The trim accessor for writing trimmed value and listening to changes that is
 * used by the {@link NgModel}, {@link FormControlDirective}, and
 * {@link FormControlName} directives.
 */
@Directive({
  selector: `[appTrimNumber]`,
  providers: [TRIM_VALUE_ACCESSOR],
})
export class TrimNumberDirective extends DefaultValueAccessor {
  /** trimしたいパターンのリスト */
  @Input() appTrimNumber?: RegExp[];

  @HostListener('input', ['$event.target.value'])
  ngOnChange = (val: string) => {
    let trimmedVal = val;
    if (this.appTrimNumber) {
      this.appTrimNumber.forEach((pattern) => {
        trimmedVal = trimmedVal.replace(pattern, '');
      });
    }
    this.onChange(trimmedVal.trim());
  };

  @HostListener('blur', ['$event.target.value'])
  ngOnBlur = (val: string) => {
    let trimmedVal = val;
    if (this.appTrimNumber) {
      this.appTrimNumber.forEach((pattern) => {
        trimmedVal = trimmedVal.replace(pattern, '');
      });
    }
    this.writeValue(trimmedVal.trim());
    this.onTouched();
  };

  writeValue(value: any): void {
    if (typeof value === 'string') {
      let trimmedVal = value;
      if (this.appTrimNumber) {
        this.appTrimNumber.forEach((pattern) => {
          trimmedVal = trimmedVal.replace(pattern, '');
        });
      }

      trimmedVal = trimmedVal.trim();
      super.writeValue(value);
      return;
    }
    super.writeValue(value);
  }
}
