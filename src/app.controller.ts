import {Controller, Get, Req} from '@nestjs/common';
import { AppService } from './app.service';
import {Request} from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("url")
  getUrl(@Req() req: Request): string {
    const protocol = req.protocol;
    const host = req.get("Host");
    const originUrl = req.originalUrl;
    const fullUrl = protocol + host + originUrl;
   return fullUrl
  }
}
