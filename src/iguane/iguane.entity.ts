import { DemandeAdoption } from 'src/demandeAdoption/demande_adoption.entity';
import { Refuge } from 'src/refuge/refuge.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Iguane {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @ManyToOne(() => Refuge, (refuge) => refuge.iguane)
  refuge: Refuge

  @Column()
  refugeId: number;

  @OneToMany(() => DemandeAdoption, (demandeAdoption) => demandeAdoption.iguane)
  demandeAdoption: DemandeAdoption[]  

  @Column()
  couleur: string;

  @Column()
  taille: number;

  @Column()
  poids: number;

}