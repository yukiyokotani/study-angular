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
  useExisting: forwardRef(() => TrimCustomValueDirective),
  multi: true,
};

/**
 * The trim accessor for writing trimmed value and listening to changes that is
 * used by the {@link NgModel}, {@link FormControlDirective}, and
 * {@link FormControlName} directives.
 */
@Directive({
  selector: `[appTrimCustomValue]`,
  providers: [TRIM_VALUE_ACCESSOR],
})
export class TrimCustomValueDirective extends DefaultValueAccessor {
  /** trimしたいパターンのリスト */
  @Input() appTrimCustomValue?: RegExp[];

  @HostListener('input', ['$event.target.value'])
  ngOnChange = (val: string) => {
    console.log('change', val);
    let trimmedVal = val;
    if (this.appTrimCustomValue) {
      this.appTrimCustomValue.forEach((pattern) => {
        trimmedVal = trimmedVal.replace(pattern, '');
      });
    }
    this.onChange(trimmedVal.trim());
  };

  @HostListener('blur', ['$event.target.value'])
  ngOnBlur = (val: string) => {
    console.log('blur', val);
    let trimmedVal = val;
    if (this.appTrimCustomValue) {
      this.appTrimCustomValue.forEach((pattern) => {
        trimmedVal = trimmedVal.replace(pattern, '');
      });
    }
    this.writeValue(trimmedVal.trim());
    this.onTouched();
  };

  writeValue(value: any): void {
    console.log('writeValue', value);
    if (typeof value === 'string') {
      let trimmedVal = value;
      if (this.appTrimCustomValue) {
        this.appTrimCustomValue.forEach((pattern) => {
          trimmedVal = trimmedVal.replace(pattern, '');
        });
      }
      trimmedVal = trimmedVal.trim();
      super.writeValue(trimmedVal);
      return;
    }
    super.writeValue(value);
  }
}
