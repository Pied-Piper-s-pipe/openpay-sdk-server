import { WebSocketAdapter, INestApplicationContext } from '@nestjs/common';
import { MessageMappingProperties, WsResponse } from '@nestjs/websockets';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import * as WebSocket from 'ws';
import { v4 as uuidv4 } from 'uuid';

export class CustomAdapter implements WebSocketAdapter {
  private port: number;

  constructor(
    private app: INestApplicationContext,
    port: number,
  ) {
    this.port = port;
  }

  create(port: number) {
    return new WebSocket.Server({ port: this.port });
  }

  bindClientConnect(server, callback: Function) {
    server.on('connection', (client: WebSocket) => {
      client.id = this.generateUniqueId(); // 给客户端分配唯一 ID
      client.connected = true;
      callback(client);

      // 监听客户端的 close 事件
      client.on('close', () => {
        client.connected = false;
      });
    });
  }

  private generateUniqueId() {
    return uuidv4(); // 使用 UUID 或其他方法生成唯一 ID
  }

  bindMessageHandlers(
    client: WebSocket,
    handlers: MessageMappingProperties[],
    process: (data: any) => Observable<any>,
  ) {
    fromEvent(client, 'message')
      .pipe(map((event: any) => JSON.parse(event.data)))
      .subscribe((message) => {
        const { event, data } = message;
        const handler = handlers.find((h) => h.message === event);
        if (handler) {
          process(handler.callback(data)).subscribe(
            (response: WsResponse<any>) => {
              client.send(JSON.stringify(response));
            },
          );
        }
      });
  }

  close(server) {
    server.close();
  }
}
