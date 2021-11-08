import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import {
  DateFormErrorStateMatcher,
  dateValidator,
  matchPasswordValidator,
  VerifyPasswordFormErrorStateMatcher,
} from './cutom-validators';

// From native date adapter in Angualr Material
export const ISO_8601_REGEX = /^(\d{4})-(\d{2})-(\d{2})(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public submittedData = '';

  /** フォームの定義 */
  public sampleForm: FormGroup;
  public isSubmitted = false;

  /** フォームコントロールの定義 */
  public nameControl: FormControl;
  public passwordControl: FormControl;
  public verifyPasswordControl: FormControl;
  public birthdayControl: FormControl;
  public savingsControl: FormControl;

  /** ErrorStateMatcherの定義 */
  verifyPasswordFormErrorMatcher = new VerifyPasswordFormErrorStateMatcher();
  birthdayFormErrorMathcer = new DateFormErrorStateMatcher();

  /** trim対象 */
  trimPattern = [/\-/g, /\^/g, /,/g, /\./g, /\\/g, /\//g];

  constructor() {
    this.nameControl = new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ],
      updateOn: 'blur',
    });
    this.passwordControl = new FormControl('', {
      validators: [Validators.required],
      updateOn: 'submit',
    });
    this.verifyPasswordControl = new FormControl('', {
      validators: [Validators.required],
      updateOn: 'submit',
    });
    this.birthdayControl = new FormControl('', {
      validators: [Validators.required, dateValidator],
      updateOn: 'blur',
    });
    this.savingsControl = new FormControl('', {
      validators: [
        Validators.required,
        Validators.min(0),
        Validators.max(1000000000),
      ],
      updateOn: 'blur',
    });
    this.sampleForm = new FormGroup(
      {
        name: this.nameControl,
        password: this.passwordControl,
        verifyPassword: this.verifyPasswordControl,
        birthday: this.birthdayControl,
        savings: this.savingsControl,
      },
      {
        validators: matchPasswordValidator,
        updateOn: 'submit',
      }
    );
  }

  public dateChangeHandler = (event: MatDatepickerInputEvent<Date>) => {
    console.log('change', (event.targetElement as HTMLInputElement).value);
    const isValid = this.validateUserInput(
      (event.targetElement as HTMLInputElement).value
    );
    const dateString = isValid
      ? this.formatISODate(event.target.value?.toISOString() ?? '0000/00/00')
      : '0000/00/00'; // 存在しない日付
    this.birthday?.patchValue(dateString);
  };

  public dateInputHandler = (event: MatDatepickerInputEvent<Date>) => {
    console.log('input', (event.targetElement as HTMLInputElement).value);
    if (!event.target.value) return;
    const dateString = this.formatISODate(event.target.value?.toISOString());
    this.birthday?.patchValue(dateString);
  };

  // Assumes YYYY/M/D input is only valid
  validateUserInput(value: string): boolean {
    const [year, month, day] = value.split('/');
    if (
      year?.length === 4 &&
      (month?.length === 1 || month?.length === 2) &&
      (day?.length === 1 || day?.length === 2)
    ) {
      return true;
    }
    return false;
  }

  public onSubmit(): void {
    this.isSubmitted = true;
    if (this.sampleForm.invalid) return;
    this.submittedData = JSON.stringify(this.sampleForm.value);
  }

  private formatISODate(value: string): string | null {
    if (ISO_8601_REGEX.test(value)) {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        date.setMinutes(date.getMinutes() + 540);
        return date?.toISOString().replace(ISO_8601_REGEX, `$1/$2/$3`);
      }
    }
    return value;
  }

  get name(): AbstractControl | null {
    return this.sampleForm.get('name');
  }
  get password(): AbstractControl | null {
    return this.sampleForm.get('password');
  }
  get verifyPassword(): AbstractControl | null {
    return this.sampleForm.get('verifyPassword');
  }
  get birthday(): AbstractControl | null {
    return this.sampleForm.get('birthday');
  }
  get savings(): AbstractControl | null {
    return this.sampleForm.get('savings');
  }
}
