import {
  AbstractControl,
  FormControl,
  FormGroupDirective,
  NgForm,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export const matchPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const verifyPassword = control.get('verifyPassword');

  return password && verifyPassword && password.value !== verifyPassword.value
    ? { notMatchPassword: true }
    : null;
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
