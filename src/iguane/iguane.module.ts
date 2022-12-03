import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Iguane } from './../iguane/iguane.entity';
import { IguaneController } from './iguane.controller';
import { IguaneRepository } from './iguane.repository';
import { IguaneService } from './iguane.service';

@Module({
  imports: [TypeOrmModule.forFeature([Iguane])],
providers: [IguaneService, IguaneRepository],
  controllers: [IguaneController],
})
export class IguaneModule {}