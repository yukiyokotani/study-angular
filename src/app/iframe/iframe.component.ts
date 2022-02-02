import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { MessageContent } from '../embedded-page/embedded-page.component';

@Component({
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent {
  @ViewChild('iframe') iframe?: ElementRef<HTMLIFrameElement>;

  public urlSafe!: SafeResourceUrl;
  public receivedMessage = '';

  public form: FormGroup;
  public messageControl: FormControl;

  constructor(public sanitizer: DomSanitizer) {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
      environment.host + '/embedded-page?showToolbar=false'
    );
    this.messageControl = new FormControl('', {
      updateOn: 'submit',
    });
    this.form = new FormGroup({
      message: this.messageControl,
    });
  }

  @HostListener('window:message', ['$event']) onPostMessage(
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
    this.iframe?.nativeElement?.contentWindow?.postMessage(
      message,
      environment.host
    );
  }

  get message(): AbstractControl | null {
    return this.form.get('message');
  }
}
