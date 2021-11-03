import { DecimalPipe, ɵgetDOM as getDOM } from '@angular/common';
import {
  Directive,
  HostListener,
  forwardRef,
  Provider,
  Input,
  Renderer2,
  ElementRef,
  Optional,
  Inject,
} from '@angular/core';
import {
  COMPOSITION_BUFFER_MODE,
  DefaultValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

const TRIM_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TrimNumberDirective),
  multi: true,
};

/**
 * 数値入力フォームのためのValueAccessorDirective。
 * 入力中は通常通りの動作で、blurのタイミングでDirective引数に渡した
 * 正規表現のパターンをトリミングする。また、表示する数値には1,000区切りのカンマを表示し、
 * 入力中になるとカンマは非表示にする。
 */
@Directive({
  selector: `[appTrimNumber]`,
  providers: [
    TRIM_VALUE_ACCESSOR,
    { provide: COMPOSITION_BUFFER_MODE, useValue: null },
  ],
})
export class TrimNumberDirective extends DefaultValueAccessor {
  /** trimしたいパターンのリスト */
  @Input() appTrimNumber?: RegExp[];

  constructor(
    private decimalPipe: DecimalPipe,
    renderer: Renderer2,
    elementRef: ElementRef<any>,
    @Inject(COMPOSITION_BUFFER_MODE)
    _compositionMode: boolean
  ) {
    /** DefaultValueAccessorの実装を参照 */
    super(renderer, elementRef, _compositionMode);
  }

  @HostListener('input', ['$event.target.value'])
  ngOnChange = (val: string) => {
    // console.log('change', val);
    let trimmedVal = val;
    if (this.appTrimNumber) {
      this.appTrimNumber.forEach((pattern) => {
        trimmedVal = trimmedVal.replace(pattern, '');
      });
    }
    this.onChange(trimmedVal.trim());
  };

  @HostListener('focus', ['$event.target.value'])
  ngOnFocus = (val: string) => {
    // console.log('focus', val);
    let valWithoutThousandsSeparator = val;
    valWithoutThousandsSeparator = valWithoutThousandsSeparator.replace(
      /,/g,
      ''
    );
    this.writeValue(valWithoutThousandsSeparator);
  };

  @HostListener('blur', ['$event.target.value'])
  ngOnBlur = (val: string) => {
    // console.log('blur', val);
    let trimmedVal = val;
    if (this.appTrimNumber) {
      this.appTrimNumber.forEach((pattern) => {
        trimmedVal = trimmedVal.replace(pattern, '');
      });
    }
    const valWithThousandsSeparator = this.decimalPipe.transform(
      trimmedVal.trim(),
      '1.0-0'
    );
    this.writeValue(valWithThousandsSeparator);
    this.onTouched();
  };

  writeValue(value: any): void {
    console.log('writeValue', value);
    if (typeof value === 'string') {
      value = value.trim();
    }

    super.writeValue(value);
  }
}
