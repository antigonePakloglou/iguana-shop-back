import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Iguane } from './iguane.entity';


@Injectable()
export class IguaneRepository extends Repository<Iguane> {
  constructor(private dataSource: DataSource) {
    super(Iguane, dataSource.createEntityManager());
  }
}
