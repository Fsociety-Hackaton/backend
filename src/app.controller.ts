import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiHeader } from '@nestjs/swagger';

@ApiHeader({
  name: 'Get All',
  description: 'API Method to obtain offers',
})
@ApiTags('APP Module')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
