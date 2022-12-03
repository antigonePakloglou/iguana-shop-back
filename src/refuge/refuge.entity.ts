import { Iguane } from 'src/iguane/iguane.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Refuge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @OneToMany(() => Iguane, (iguane) => iguane.refuge)
  iguane: Iguane[]

}