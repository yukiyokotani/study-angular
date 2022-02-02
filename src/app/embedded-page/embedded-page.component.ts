import { Component, HostListener } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { environment } from 'src/environments/environment';

export type MessageContent = {
  type: 'MESSAGE';
  content: string;
};

@Component({
  templateUrl: './embedded-page.component.html',
  styleUrls: ['./embedded-page.component.scss'],
})
export class EmbeddedPageComponent {
  public receivedMessage = '';

  public form: FormGroup;
  public messageControl: FormControl;

  constructor() {
    this.messageControl = new FormControl('', {
      updateOn: 'submit',
    });
    this.form = new FormGroup({
      message: this.messageControl,
    });
  }

  @HostListener('window:message', ['$event']) onMessage(
    event: MessageEvent<MessageContent>
  ) {
    if (
      !(event.source instanceof MessagePort) &&
      !(event.source instanceof ServiceWorker)
    ) {
      if (event.data.type === 'MESSAGE') {
        this.receivedMessage = event.data.content;
      }
    }
  }

  public onSubmit() {
    this.postMessage({
      type: 'MESSAGE',
      content: this.form.value.message,
    });
    this.form.reset();
  }

  private postMessage(message: MessageContent) {
    window.parent.postMessage(message, environment.host);
  }

  get message(): AbstractControl | null {
    return this.form.get('message');
  }
}
