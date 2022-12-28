import { DataSource, Repository } from 'typeorm';
import { Iguane } from './iguane.entity';
export declare class IguaneRepository extends Repository<Iguane> {
    private dataSource;
    constructor(dataSource: DataSource);
}
