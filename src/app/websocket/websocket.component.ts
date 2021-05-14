import { Component, OnInit } from '@angular/core';
import { SocketioService } from './socketio.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css'],
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
