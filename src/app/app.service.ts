import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UpdateWorkingModeDTO } from 'src/shared/worker.dto';

@Injectable()
export class AppService {
  constructor(private readonly userRepository: UserRepository) { }

  async enableWorkingMode(workerDTO: UpdateWorkingModeDTO) {
    const { ID, ...data } = workerDTO
    console.log(ID, data)
    await this.userRepository.update({ ID }, data)
  }
}
