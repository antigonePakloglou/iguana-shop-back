import { Injectable } from '@nestjs/common';
import { Iguane } from './iguane.entity';
import { IguaneRepository } from './iguane.repository';


@Injectable()
export class IguaneService {
  constructor(private readonly iguaneRepository: IguaneRepository) {}

  getAllIguane(): Promise<Iguane[]> {
    return this.iguaneRepository.find();
  }

  getIguaneById(id: number): Promise<Iguane> {
    return this.iguaneRepository.findOne({
      where: {
        id: id,
      },
    });
  }  
}
