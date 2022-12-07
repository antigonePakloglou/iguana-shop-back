import { Iguane } from './iguane.entity';
import { IguaneRepository } from './iguane.repository';
export declare class IguaneService {
    private readonly iguaneRepository;
    constructor(iguaneRepository: IguaneRepository);
    getAllIguane(): Promise<Iguane[]>;
    getIguaneById(id: number): Promise<Iguane>;
}
