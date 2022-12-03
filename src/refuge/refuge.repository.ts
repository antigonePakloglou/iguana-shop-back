import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Refuge } from './refuge.entity';


@Injectable()
export class RefugeRepository extends Repository<Refuge> {
  constructor(private dataSource: DataSource) {
    super(Refuge, dataSource.createEntityManager());
  }
}
