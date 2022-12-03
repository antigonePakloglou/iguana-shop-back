import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemandeAdoptionController } from './demande_adoption.controller';
import { DemandeAdoption } from './demande_adoption.entity';
import { DemandeAdoptionRepository } from './demande_adoption.repository';
import {DemandeAdoptionService } from './demande_adoption.service';


@Module({
  imports: [TypeOrmModule.forFeature([DemandeAdoption])],
providers: [DemandeAdoptionService, DemandeAdoptionRepository],
  controllers: [DemandeAdoptionController],
})
export class DemandeAdoptionModule {}