import {
  Directive,
  HostListener,
  forwardRef,
  Provider,
  Input,
} from '@angular/core';
import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { current } from 'immer';

const TRIM_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TrimDateDirective),
  multi: true,
};

/**
 * The trim accessor for writing trimmed value and listening to changes that is
 * used by the {@link NgModel}, {@link FormControlDirective}, and
 * {@link FormControlName} directives.
 */
@Directive({
  selector: `[appTrimDate]`,
  providers: [TRIM_VALUE_ACCESSOR],
})
export class TrimDateDirective extends DefaultValueAccessor {
  private needEscapeCharacters = [
    '/',
    '\\',
    "'",
    '"',
    '.',
    '*',
    '+',
    '?',
    '^',
    '$',
    '-',
    '|',
    '(',
    ')',
    '{',
    '}',
    '{',
    '}',
  ];

  /** trimしたいパターンのリスト */
  private _trimPattern?: RegExp;
  @Input() set appTrimDate(trimPattern: string[]) {
    this._trimPattern = new RegExp(
      `(${trimPattern.reduce((prev, curr) => {
        const escapedCurr = this.needEscapeCharacters.includes(curr)
          ? '\\' + curr
          : curr;
        return `${prev}|${escapedCurr}`;
      }, '')})+`,
      'g'
    );
    // console.log(this._trimPattern);
  }

  @HostListener('input', ['$event.target.value'])
  ngOnChange = (val: string) => {
    let trimmedVal = val;
    if (this._trimPattern) {
      trimmedVal = trimmedVal.replace(this._trimPattern, '');
    }
    this.onChange(trimmedVal.trim());
  };

  @HostListener('blur', ['$event.target.value'])
  ngOnBlur = (val: string) => {
    let trimmedVal = val;
    if (this._trimPattern) {
      trimmedVal = trimmedVal.replace(this._trimPattern, '');
    }
    this.writeValue(trimmedVal.trim());
    this.onTouched();
  };

  writeValue(value: any): void {
    // console.log('writeValue', value);
    if (typeof value === 'string') {
      value = value.trim();
    }

    super.writeValue(value);
  }
}
