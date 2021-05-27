import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  templateUrl: './embedded-page.component.html',
  styleUrls: ['./embedded-page.component.css'],
})
export class EmbeddedPageComponent implements OnInit {
  message = '';

  constructor() {}

  @HostListener('window:message', ['$event']) onPostMessage(
    event: MessageEvent
  ) {
    if (
      !(event.source instanceof MessagePort) &&
      !(event.source instanceof ServiceWorker)
    ) {
      if (event.data.type === 'message') {
        this.message = event.data.value.message;
      }
    }
  }

  ngOnInit(): void {
    window.parent.postMessage(
      {
        type: 'message',
        value: { message: 'Hello! I send this message from iframe!' },
      },
      'http://localhost:4200/#/iframe'
    );
  }
}
