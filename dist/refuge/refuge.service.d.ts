import { Refuge } from './refuge.entity';
import { RefugeRepository } from './refuge.repository';
export declare class RefugeService {
    private readonly refugeRepository;
    constructor(refugeRepository: RefugeRepository);
    getAllRefuge(): Promise<Refuge[]>;
}
