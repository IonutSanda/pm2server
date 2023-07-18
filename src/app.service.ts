import { Injectable } from '@nestjs/common';
import * as pm2 from 'pm2';

@Injectable()
export class AppService {

  getPm2ServicesList(): Promise<pm2.ProcessDescription[]> {
    return new Promise((resolve, reject) => {
      pm2.list((err, list) => {
        if (err) {
          reject(err)
        } else {
          resolve(list);
        }
      })
    })
  }

  //id can either be the id of the process or the name of the process
  restartPm2Service(idOrName: number | string): Promise<{success:string}> {
    return new Promise((resolve, reject) => {
      pm2.restart(idOrName, (err) => {
        if (err) {
          reject(err);
        } else {
            resolve({ success: `Process with ID: ${idOrName} was restarted!` });
        }
      })
    })
  }

  startPm2Service(idOrName: string): Promise<{success}> {
    return new Promise((resolve, reject) => {
      pm2.start(idOrName, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({ success: `Process with ID: ${idOrName} was started!` });
        }
      })
    })
  }

  stopPm2Service(idOrName: string):Promise<{success: string}> {
    return new Promise((resolve, reject) => {
      pm2.stop(idOrName, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({ success: `Process with ID: ${idOrName} was stopped!` });
        }
      })
    })
  }

}