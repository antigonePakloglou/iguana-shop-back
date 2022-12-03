import { Iguane } from 'src/iguane/iguane.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class DemandeAdoption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  telephone: number;

  @Column()
  numero_declaration: number;

  @ManyToOne(() => Iguane, (iguane) => iguane.demandeAdoption)
    iguane: Iguane

}