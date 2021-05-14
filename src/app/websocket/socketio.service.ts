import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';

@Injectable({
  providedIn: 'root',
})
export class SocketioService {
  private socket: Socket<DefaultEventsMap, DefaultEventsMap>;

  constructor() {
    this.socket = io('http://localhost:7000');
  }

  public sendMessage(message: string): void {
    this.socket.emit('message', message);
  }
}
