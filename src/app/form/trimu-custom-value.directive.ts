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
 * 文字入力フォームのためのValueAccessorDirective。
 * 入力中は通常通りの動作で、blurのタイミングでDirective引数に渡した正規表現のパターンをトリミングする。
 * 先頭末尾の空白文字についてはデフォルトでトリミングする。
 * {@link https://https://github.com/khashayar/ng-trim-value-accessor/blob/master/src/trim-value-accessor.ts.com ベース実装}
 */
@Directive({
  selector: `[appTrimCustomValue]`,
  providers: [TRIM_VALUE_ACCESSOR],
})
export class TrimCustomValueDirective extends DefaultValueAccessor {
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

  /** filterしたいパターンのリスト */
  private _filterPattern?: RegExp;
  @Input() set appTrimCustomValue(trimPattern: string[]) {
    this._filterPattern = new RegExp(
      `(${trimPattern.reduce((prev, curr) => {
        const escapedCurr = this.needEscapeCharacters.includes(curr)
          ? '\\' + curr
          : curr;
        return `${prev}|${escapedCurr}`;
      }, '')})+`,
      'g'
    );
  }

  @HostListener('input', ['$event.target.value'])
  ngOnChange = (val: string) => {
    let filteredVal = val;
    if (this._filterPattern) {
      filteredVal = filteredVal.replace(this._filterPattern, '');
    }
    this.onChange(filteredVal.trim());
  };

  @HostListener('blur', ['$event.target.value'])
  ngOnBlur = (val: string) => {
    let filteredVal = val;
    if (this._filterPattern) {
      filteredVal = filteredVal.replace(this._filterPattern, '');
    }
    this.writeValue(filteredVal.trim());
    this.onTouched();
  };

  writeValue(value: any): void {
    if (typeof value === 'string') {
      value = value.trim();
    }

    super.writeValue(value);
  }
}
