import { Controller, Get, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { UpdateWorkingModeDTO } from 'src/shared/worker.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('worker.toggle-working-mode')
  enableWorkingMode(@Payload(ValidationPipe) userDTO: UpdateWorkingModeDTO) {
    return this.appService.enableWorkingMode(userDTO);
  }
}
