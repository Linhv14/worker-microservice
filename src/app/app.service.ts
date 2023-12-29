import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UpdateWorkingModeDTO } from 'src/shared/worker.dto';

@Injectable()
export class AppService {
  constructor(private readonly userRepository: UserRepository) { }

  async getNearestDistance() {
    console.log("Nearest")
    return {data: "nearest"}
  }

  async update(user: any) {
    const { ID, ...data } = user
    return await this.userRepository.update({ ID }, data)
  }

  async enableWorkingMode(workerDTO: UpdateWorkingModeDTO) {
    const { ID, ...data } = workerDTO
    console.log(ID, data)
    await this.userRepository.update({ ID }, data)
  }
}
