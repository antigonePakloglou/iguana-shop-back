import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RefugeController } from './refuge.controller';
import { Refuge } from './refuge.entity';
import { RefugeRepository } from './refuge.repository';
import { RefugeService } from './refuge.service';


@Module({
  imports: [TypeOrmModule.forFeature([Refuge])],
providers: [RefugeService, RefugeRepository],
  controllers: [RefugeController],
})
export class RefugeModule {}