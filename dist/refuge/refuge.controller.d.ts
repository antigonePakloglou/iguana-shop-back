import { Refuge } from './refuge.entity';
import { RefugeService } from './refuge.service';
export declare class RefugeController {
    private readonly refugeService;
    constructor(refugeService: RefugeService);
    getAllRefuge(): Promise<Refuge[]>;
    getRefugeById(id: number): Promise<Refuge>;
}
