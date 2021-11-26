import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { SocketioService } from './socketio.service';

@Component({
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.scss'],
})
export class WebsocketComponent implements OnInit {
  message = new FormControl('', Validators.required);

  constructor(private socketio: SocketioService) {}

  ngOnInit(): void {}

  sendMessage() {
    if (this.message.invalid) return;
    this.socketio.sendMessage(this.message.value);
    this.message.setValue('');
    this.message.setErrors(null);
  }
}
