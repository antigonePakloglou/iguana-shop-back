import { DemandeAdoption } from './demande_adoption.entity';
import { DemandeAdoptionService } from './demande_adoption.service';
export declare class DemandeAdoptionController {
    private readonly demandeAdoptionService;
    constructor(demandeAdoptionService: DemandeAdoptionService);
    getAllRefuge(): Promise<DemandeAdoption[]>;
}
