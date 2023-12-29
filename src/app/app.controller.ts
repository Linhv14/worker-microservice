import { Controller, Get, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { UpdateWorkingModeDTO } from 'src/shared/worker.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('worker.get-nearest-distance')
  getNearestDistance(@Payload(ValidationPipe) userDTO: UpdateWorkingModeDTO) {
    console.log(userDTO)
    return this.appService.getNearestDistance()
  }

  @MessagePattern('worker.get-all')
  getAllWorkers(@Payload(ValidationPipe) userDTO: any) {
    console.log("GETTING FROM USER MICROSERVICE", userDTO)
    return "message"
  }

  @EventPattern('worker.toggle-working-mode')
  enableWorkingMode(@Payload(ValidationPipe) userDTO: UpdateWorkingModeDTO) {
    return this.appService.enableWorkingMode(userDTO);
  }

  @EventPattern('worker.update-coordinate')
  async updateCoordinate(@Payload(ValidationPipe) user: any) {
    return await this.appService.update(user)
  }
}
