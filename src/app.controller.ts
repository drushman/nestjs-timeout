import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { TimeoutInterceptor } from './timeout.interceptor';

@Controller()
@UseInterceptors(TimeoutInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  @Get()
  async getHello(): Promise<string> {
    // Hi @jmcdo29
    // I want all of logic in this controller to be aborted when request reached timeout.
    await this.sleep(5000);

    console.log("Logic has been executed");

    return this.appService.getHello();
  }
}
