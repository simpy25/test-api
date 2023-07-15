import {Controller, Get, Req} from '@nestjs/common';
import { AppService } from './app.service';
import {Request} from 'express';
import {IpAddress} from "./dec";
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("url")
  getUrl(@Req() req: Request): any {
    const protocol = req.protocol;
    const host = req.get("Host");
    const originUrl = req.originalUrl;
    const fullUrl = protocol + host + originUrl;
    console.log('IP', req.ip)
    console.log('fullUrl', protocol + host + originUrl)
   return {fullUrl, ip: req.ip}
  }
}
