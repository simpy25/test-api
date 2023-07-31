import {Controller, Get, Req, Ip} from '@nestjs/common';
import { AppService } from './app.service';
import {Request} from 'express';
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
    return {"ROOM":{"ID":"1C4021","BedName":"1C-402-1","PatientName":"Forharrisoneonly Donotuse","attendingphys":"WPH-Physician Generic","attendingphysprefix":"Dr.","attendingphysdegree":"MD","primaryRN":"integretED Primary RN","secondRN":"integretED Secondary RN","event1Time":"202307302115","e1-appointmentName":"X-Ray Clinic","event2Time":"202307302116","e2-appointmentName":"Rehab Plus","event3Time":"202307302345","e3-appointmentName":"MSK Clinic", "event4Time":"202307302350","e4-appointmentName":"Howdy"}}

  }

  @Get("images")
  getImages(): any {
    return [
        'https://iili.io/HZMZfZN.md.png',
        'https://iili.io/HZMZu9f.md.png',
        'https://iili.io/HZMZI8G.md.png'
    ]

  }

}
