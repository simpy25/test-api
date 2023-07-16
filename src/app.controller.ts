import {Controller, Get, Req, Ip} from '@nestjs/common';
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
  getUrl(@Req() req: Request, @Ip() ip): any {
    const protocol = req.protocol;
    const host = req.get("Host");
    const ipAddress = req.header('x-forwarded-for') ||
        req.socket.remoteAddress;
    console.log('ipAddress', ipAddress)
    const originUrl = req.originalUrl;
    const fullUrl = protocol + host + originUrl;
    console.log('IP', req.ip)
    console.log('IP2', ip)
    console.log('fullUrl', protocol + host + originUrl)
   return {fullUrl, ip: req.ip, ip2: ip, ipAddress}
  }
}
