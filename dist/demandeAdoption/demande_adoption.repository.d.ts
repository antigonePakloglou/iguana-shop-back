import { DataSource, Repository } from 'typeorm';
import { DemandeAdoption } from './demande_adoption.entity';
export declare class DemandeAdoptionRepository extends Repository<DemandeAdoption> {
    private dataSource;
    constructor(dataSource: DataSource);
}
