import { Iguane } from './iguane.entity';
import { IguaneService } from './iguane.service';
export declare class IguaneController {
    private readonly iguaneService;
    constructor(iguaneService: IguaneService);
    getAllIguane(): Promise<Iguane[]>;
    getIguaneById(id: number): Promise<Iguane>;
}
