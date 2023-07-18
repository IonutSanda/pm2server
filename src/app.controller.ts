import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ProcessDescription } from 'pm2';

@Controller()
export class AppController {
  public constructor(private readonly appService: AppService) {}

  @Get("/pm2/list")
  getPm2ServicesListController():Promise<ProcessDescription[]>{
    return this.appService.getPm2ServicesList();
  }

  @Get("/pm2/:id/restart")
  restartPm2ServiceController(@Param("id") id: number):Promise<{success: string}>{
    return this.appService.restartPm2Service(id);
  }

  @Get("/pm2/:id/start")
  startPm2ServiceController(@Param("id") id: string):Promise<{success: string}>{
    return this.appService.startPm2Service(id);
  }

  @Get("/pm2/:id/stop")
  stopPm2ServiceController(@Param("id") id: string):Promise<{success: string}>{
    return this.appService.stopPm2Service(id);
  }

}
