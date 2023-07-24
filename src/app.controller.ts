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
    console.log(req.headers[''])
    // const host = req.get("Host");
    // const ipAddress = req.header('x-forwarded-for') ||
    //     req.socket.remoteAddress;
    // console.log('ipAddress', ipAddress)
    // const originUrl = req.originalUrl;
    // const fullUrl = protocol + host + originUrl;
    // console.log('IP', req.ip)
    // console.log('IP2', ip)
    // console.log('fullUrl', protocol + host + originUrl)
    return {"ROOM":{"ID":"1C4021","BedName":"1C-402-1","PatientName":"Forharrisoneonly Donotuse","attendingphys":"WPH-Physician Generic","attendingphysprefix":"Dr.","attendingphysdegree":"MD","primaryRN":"integretED Primary RN","secondRN":"integretED Secondary RN","event1Time":"202307242101","e1-appointmentName":"X-Ray Clinic","event2Time":"202307242245","e2-appointmentName":"Rehab Plus","event3Time":"202307242345","e3-appointmentName":"MSK Clinic", "event4Time":"202307242303","e4-appointmentName":"Howdy"}}

  }
}
