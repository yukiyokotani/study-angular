import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import {
  dateValidator,
  matchPasswordValidator,
  VerifyPasswordFormErrorStateMatcher,
} from './cutom-validators';

export const ISO_8601_REGEX = /^(\d{4})-(\d{2})-(\d{2})(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
export const CUSTOM_YMD_REGEX = /^(\d{4})\/(\d{2})\/(\d{2})$/;

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

  /** trim対象 */
  trimPattern = ['-', '^', ',', '.', '\\', ' '];

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
    console.log('change', event.target.value);
    if (!event.target.value) return;
    this.birthday?.setValue(
      this.convertToYYYYMMDDFromISODate(event.target.value?.toISOString())
    );
    this.birthday?.markAsTouched();
    this.birthday?.markAsDirty();
  };

  public dateInputHandler = (event: MatDatepickerInputEvent<Date>) => {
    console.log('input', event.target.value);
    if (!event.target.value) return;
    this.birthday?.setValue(
      this.convertToYYYYMMDDFromISODate(event.target.value?.toISOString())
    );
    this.birthday?.markAsTouched();
    this.birthday?.markAsDirty();
  };

  public onSubmit(): void {
    console.log(this.sampleForm);
    this.isSubmitted = true;
    if (this.sampleForm.invalid) return;
    this.submittedData = JSON.stringify(this.sampleForm.value);
  }

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
