import { MsgTypeEnum } from '@app/shared/define/msg-type.enum';
import {
  MsgCoinPriceChangedResp,
  MsgRegisterClientReq,
  MsgRegisterClientResp,
} from '@app/shared/interfaces/websocket-msg.interface';
import { Controller, Inject, Injectable, Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import {
  GeneralWsResp,
  generateGeneralWsRespBuffer,
  PriceData,
} from './dto/general.ws.data';
import { MsgService } from './msg.service';

@WebSocketGateway({
  path: '/',
  cors: true,
  serveClient: false,
  transport: ['websocket'],
}) // 设置 WebSocket 端口和 CORS 规则
@Controller()
export class MsgGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger = new Logger(MsgGateway.name);
  static bindAddressClients: Map<string, string> = new Map<string, string>();
  static unbindAddressClients: Map<string, Socket> = new Map<string, Socket>();
  static lastestMessage: Map<string, any> = new Map<string, any>();

  constructor() {}

  @WebSocketServer() io: Server;

  afterInit() {
    this.logger.log('Initialized');
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client id: ${client.id} connected, ${args}`);
    MsgGateway.unbindAddressClients.set(client.id, client);
    MsgGateway.lastestMessage.forEach((message) => {
      client.send(generateGeneralWsRespBuffer(message));
    });
  }

  handleDisconnect(client: any) {
    this.logger.log(`Cliend id:${client.id} disconnected`);
    this.clearClient(client.id);
  }

  @SubscribeMessage('register')
  handleRegisgerMessage(client: Socket, data: MsgRegisterClientReq) {
    this.logger.log(`Message received from client id: ${client.id}`);
    this.logger.debug(`Payload: ${data}`);
    MsgGateway.bindAddressClients.set(data.address, client.id);
    const resp: MsgRegisterClientResp = {
      type: MsgTypeEnum.REGISTER,
      address: data.address,
      device: data.device,
      message: 'success',
    };

    return {
      event: MsgTypeEnum.REGISTER,
      data: resp,
    };
  }

  async broadcastPrice(message: PriceData) {
    const buffer = generateGeneralWsRespBuffer(message);
    MsgGateway.lastestMessage.set(message.id, message);
    for (const client of MsgGateway.unbindAddressClients.values()) {
      this.onewaySendMessage(client, buffer);
    }
  }

  //向指定用户推送消息
  private async onewaySendMessage(client: Socket, message: any) {
    try {
      if (client.connected) {
        client.send(message);
      } else {
        this.clearClient(client.id);
      }
    } catch (error) {
      this.logger.error(`Failed to send message to client, error: ${error}`);
      this.clearClient(client.id);
    }
  }

  private async clearClient(clientId: string) {
    this.logger.log(`clearClient: ${clientId}`);
    MsgGateway.unbindAddressClients.delete(clientId);
  }
}
