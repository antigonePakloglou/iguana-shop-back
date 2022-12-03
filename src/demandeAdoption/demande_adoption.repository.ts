import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { DemandeAdoption } from './demande_adoption.entity';


@Injectable()
export class DemandeAdoptionRepository extends Repository<DemandeAdoption> {
  constructor(private dataSource: DataSource) {
    super(DemandeAdoption, dataSource.createEntityManager());
  }
}
