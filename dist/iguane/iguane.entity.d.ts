import { DemandeAdoption } from 'src/demandeAdoption/demande_adoption.entity';
import { Refuge } from 'src/refuge/refuge.entity';
export declare class Iguane {
    id: number;
    nom: string;
    refuge: Refuge;
    demandeAdoption: DemandeAdoption[];
    couleur: string;
    taille: number;
    poids: number;
}
