import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
  dateValidator,
  matchPasswordValidator,
  VerifyPasswordFormErrorStateMatcher,
} from './cutom-validators';

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
  verifyPasswordFormMatcher = new VerifyPasswordFormErrorStateMatcher();

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

  public onSubmit(): void {
    this.isSubmitted = true;
    if (this.sampleForm.invalid) return;
    this.submittedData = JSON.stringify(this.sampleForm.value);
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
