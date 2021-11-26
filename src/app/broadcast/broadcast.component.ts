import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, timeout } from 'rxjs/operators';

const TIMEOUT_LIMIT = 5000;

export type BroadcastMessage = {
  type: 'REQUEST' | 'RESPONSE';
  content: string;
};

@Component({
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.scss'],
})
export class BroadcastComponent implements OnInit {
  public sentMessageList: string[] = [];
  public receivedMessageList: string[] = [];

  private bc = new BroadcastChannel('study-angular');
  private response$ = new Subject<MessageEvent<BroadcastMessage>>();
  private stopSubscribe$ = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.bc.onmessage = (ev: MessageEvent<BroadcastMessage>) => {
      if (ev.data.type === 'RESPONSE') {
        this.response$.next(ev);
      }
      if (ev.data.type === 'REQUEST') {
        this.postMessage('RESPONSE', ev.data.content);
      }
    };
  }

  /**
   * Broadcastでメッセージを送信し、タイムアウト後に受信した返信をまとめてコンソール出力する。
   *
   * @param message 送信するメッセージ
   */
  async handleClickSendMessage(message: string): Promise<void> {
    const responses = await this.sendMessage(message);
    this.receivedMessageList.push(...responses);
    console.log(responses);
  }

  /**
   * Broadcastでメッセージを送信する
   * 受信した返信は都度コンソールに出力する
   *
   * @param message 送信するメッセージ
   * @returns 返信されたメッセージ
   */
  async sendMessage(message: string): Promise<string[]> {
    let resolveFunc: (value: string[]) => void;
    const promise = new Promise<string[]>((resolve) => {
      resolveFunc = resolve;
    });
    const responses: string[] = [];
    this.response$
      .pipe(timeout(TIMEOUT_LIMIT), takeUntil(this.stopSubscribe$))
      .subscribe(
        (res) => {
          console.log(res.data);
          responses.push(res.data.content);
        },
        (err) => {
          console.log(err.message);
          resolveFunc(responses);
        }
      );
    this.postMessage('REQUEST', message);
    return promise;
  }

  private postMessage(type: 'REQUEST' | 'RESPONSE', message: string) {
    const modifiedMessage =
      type === 'REQUEST' ? message : `Message Received: ${message}`;
    this.bc.postMessage({
      type,
      content: modifiedMessage,
    });
    this.sentMessageList.push(modifiedMessage);
    return;
  }
}
