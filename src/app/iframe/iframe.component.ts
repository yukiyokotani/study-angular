import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css'],
})
export class IframeComponent implements OnInit {
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
        event.source?.postMessage(
          { type: 'message', value: { message: 'Good! I can hear you!' } },
          event.origin
        );
      }
    }
  }

  ngOnInit(): void {}
}
