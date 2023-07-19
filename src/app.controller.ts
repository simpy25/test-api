import {Controller, Get, Req, Ip} from '@nestjs/common';
import { AppService } from './app.service';
import {Request} from 'express';
import {IpAddress} from "./dec";
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("url")
  getUrl(@Req() req: Request, @Ip() ip): any {
    console.log(req.headers)
    // const host = req.get("Host");
    // const ipAddress = req.header('x-forwarded-for') ||
    //     req.socket.remoteAddress;
    // console.log('ipAddress', ipAddress)
    // const originUrl = req.originalUrl;
    // const fullUrl = protocol + host + originUrl;
    // console.log('IP', req.ip)
    // console.log('IP2', ip)
    // console.log('fullUrl', protocol + host + originUrl)
    return '<ROOM><ID>1C4021</ID><BedName>1C-402-1</BedName><PatientName>Forharrisoneonly Donotuse</PatientName><attendingphys>WPH-Physician Generic</attendingphys><attendingphysprefix>Dr.</attendingphysprefix><attendingphysdegree>MD</attendingphysdegree><primaryRN>integretED Primary RN</primaryRN><secondRN>integretED Secondary RN</secondRN><event1Time>202307040945</event1Time><e1-appointmentName>X-Ray Clinic</e1-appointmentName><event2Time>202307051045</event2Time><e2-appointmentName>Rehab Plus</e2-appointmentName><event3Time>202307051245</event3Time><e3-appointmentName>MSK Clinic</e3-appointmentName></ROOM>'
  }
}
