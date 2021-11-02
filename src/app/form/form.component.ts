import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
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

  /** ErrorStateMatcherの定義 */
  verifyPasswordFormMatcher = new VerifyPasswordFormErrorStateMatcher();

  constructor() {
    this.nameControl = new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8),
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
    this.sampleForm = new FormGroup(
      {
        name: this.nameControl,
        password: this.passwordControl,
        verifyPassword: this.verifyPasswordControl,
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
}
