import { Iguane } from 'src/iguane/iguane.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class DemandeAdoption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({type: 'bigint'})
  telephone: number;

  @Column({ type: 'bigint'})
  numero_declaration: number;

  @ManyToOne(() => Iguane, (iguane) => iguane.demandeAdoption)
  iguane: Iguane

  @Column()
  iguaneId: number;

  @Column({ type : 'bool'})
  isEligible: boolean;
}