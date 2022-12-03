import { DataSource, Repository } from 'typeorm';
import { Refuge } from './refuge.entity';
export declare class RefugeRepository extends Repository<Refuge> {
    private dataSource;
    constructor(dataSource: DataSource);
}
