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
    return '<ROOM>\n' +
        '    <ID>4D5081</ID>\n' +
        '    <BedName>4D-508-1</BedName>\n' +
        '    <PatientName>Aaron Smith Geaorge</PatientName>\n' +
        '    <attendingphys>WPH-Physician Generic</attendingphys>\n' +
        '    <attendingphysprefix>Dr.</attendingphysprefix>\n' +
        '    <attendingphysdegree>MD</attendingphysdegree>\n' +
        '\t<primaryRN>integretED Primary RN</primaryRN>\n' +
        '\t<secondRN>integretED Secondary RN</secondRN>\n' +
        '    <event1Time>202307040945</event1Time>\n' +
        '    <e1-appointmentName>X-Ray Clinic</e1-appointmentName>\n' +
        '    <event2Time>202307041045</event2Time>\n' +
        '    <e2-appointmentName>Rehab Plus</e2-appointmentName>\n' +
        '    <event3Time>202307041245</event3Time>\n' +
        '    <e3-appointmentName>MSK Clinic</e3-appointmentName>\n' +
        '</ROOM>'
  }
}
