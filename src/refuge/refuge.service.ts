import { Injectable } from '@nestjs/common';
import { Refuge } from './refuge.entity';
import { RefugeRepository } from './refuge.repository';


@Injectable()
export class RefugeService {
  constructor(private readonly refugeRepository: RefugeRepository) {}

  getAllRefuge(): Promise<Refuge[]> {
    return this.refugeRepository.find();
  }

  /* getAllIguaneByRefuge(refuge: string): Promise<Refuge[]> {
    return this.refugeRepository.find({
      where: {
        refuge: refuge,
      },
    });
  } */

  
}
