import { EVENT_COIN_PRICE_CHANGED } from '@app/shared/define/const';
import { Controller, Inject, Logger } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

import { MsgService } from './msg.service';
import { CoinpriceMqEvent } from '@app/shared/interfaces/coinprice-mq-event.interface';

@Controller('/msg')
export class MsgController {
  logger = new Logger(MsgController.name);

  constructor(@Inject() private readonly msgService: MsgService) {}

  @EventPattern(EVENT_COIN_PRICE_CHANGED)
  async handlePushMessage(data: CoinpriceMqEvent[]) {
    this.logger.log(`event received from rabbmitqm: ${data}`);
    this.msgService.handleMQEvent(data);
  }
}
