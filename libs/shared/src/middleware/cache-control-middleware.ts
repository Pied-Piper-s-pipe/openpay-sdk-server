import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CacheControlMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req.headers['if-none-match'] = '';
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.removeHeader('ETag');
    res.removeHeader('if-none-match');
    next();
  }
}
