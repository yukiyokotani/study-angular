import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

export const ISO_8601_REGEX = /^(\d{4})-(\d{2})-(\d{2})(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
export const CUSTOM_YMD_REGEX = /^(\d{4})\/(\d{2})\/(\d{2})$/;

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
})
export class DatePickerComponent {
  @Input() control?: AbstractControl | null;

  public dateChangeHandler = (event: MatDatepickerInputEvent<Date>) => {
    if (!event.target.value) return;
    this.control?.setValue(
      this.convertToYYYYMMDDFromISODate(event.target.value?.toISOString())
    );
    this.control?.markAsTouched();
    this.control?.markAsDirty();
  };

  public dateInputHandler = (event: MatDatepickerInputEvent<Date>) => {
    if (!event.target.value) return;
    this.control?.setValue(
      this.convertToYYYYMMDDFromISODate(event.target.value?.toISOString())
    );
    this.control?.markAsTouched();
    this.control?.markAsDirty();
  };

  public convertToISODateFromYYYYMMDD(value: string): string {
    const found = value.match(CUSTOM_YMD_REGEX);
    if (!found || found[0] !== value) return value;
    return new Date(
      Number(found[1]),
      Number(found[2]) - 1,
      Number(found[3])
    ).toISOString();
  }

  private convertToYYYYMMDDFromISODate(value: string): string | null {
    if (ISO_8601_REGEX.test(value)) {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        date.setMinutes(date.getMinutes() + 540);
        return date?.toISOString().replace(ISO_8601_REGEX, `$1/$2/$3`);
      }
    }
    return value;
  }
}
