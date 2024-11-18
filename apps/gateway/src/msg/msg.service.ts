import { MsgTypeEnum } from '@app/shared/define/msg-type.enum';

import { InjectRedis } from '@nestjs-modules/ioredis';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import Redis from 'ioredis';

import { CoinpriceMqEvent } from '@app/shared/interfaces/coinprice-mq-event.interface';
import {
  CoinPriceEvent,
  MsgCoinPriceChangedResp,
} from '@app/shared/interfaces/websocket-msg.interface';
import { SharedService } from '@app/shared/shared.service';
import { COIN_PRICE_PUSH_QUEUE } from '@app/shared/define/const';
import { MsgGateway } from './msg.gateway';
import { PriceData } from './dto/general.ws.data';

@Injectable()
export class MsgService {
  private readonly logger = new Logger(MsgService.name);

  gatewayRmqClientProxy: ClientProxy;

  constructor(
    @InjectRedis() private readonly redis: Redis,
    @Inject(SharedService) private readonly sharedService: SharedService,
    @Inject(MsgGateway) private readonly msgGateway: MsgGateway,
  ) {
    this.gatewayRmqClientProxy = ClientProxyFactory.create(
      sharedService.getRmqOptions(COIN_PRICE_PUSH_QUEUE, '', 10),
    );
  }

  async handleMQEvent(events: CoinpriceMqEvent[]) {
    this.logger.log(`event recieved from mq: ${JSON.stringify(events)} `);
    events.forEach((event) => {
      const data: PriceData = {
        id: event.id,
        price: event.price,
        token_symbol: event.token_symbol || '',
        percent_change_1h: event.percent_change_1h || '',
        percent_change_24h: event.percent_change_24h || '',
      };
      this.msgGateway.broadcastPrice(data);
    });
  }
}
