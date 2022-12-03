import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { DemandeAdoption } from './demandeAdoption/demande_adoption.entity';
import { DemandeAdoptionModule } from './demandeAdoption/demande_adoption.module';
import { Iguane } from './iguane/iguane.entity';
import { IguaneModule } from './iguane/iguane.module';
import { Refuge } from './refuge/refuge.entity';
import { RefugeModule } from './refuge/refuge.module';

@Module({
  imports: [TypeOrmModule.forRoot({
type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'iguane_shop',
    entities: [Iguane, Refuge, DemandeAdoption],
    synchronize: true,
  }),
  IguaneModule, RefugeModule, DemandeAdoptionModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
