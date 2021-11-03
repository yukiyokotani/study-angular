import {
  AbstractControl,
  FormControl,
  FormGroupDirective,
  NgForm,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as dayjs from 'dayjs';

export const matchPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const verifyPassword = control.get('verifyPassword');

  return password && verifyPassword && password.value !== verifyPassword.value
    ? { notMatchPassword: true }
    : null;
};

export const dateValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const format = 'YYYYMMDD';
  const date = control.value;
  const isValid =
    typeof date === 'string' && dayjs(date, format).format(format) === date;
  return isValid ? null : { invalidDate: true };
};

export class VerifyPasswordFormErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return (
      isSubmitted === true &&
      control !== null &&
      (control.errors !== null ||
        (form?.form?.errors?.notMatchPassword ?? false))
    );
  }
}
