import { Module } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Column } from './column.entity';
import { UsersModule } from '../users/users.module';
import { CardsModule } from '../cards/cards.module';
import { CardsService } from '../cards/cards.service';

@Module({
  imports: [
    CardsModule,
    TypeOrmModule.forFeature([Column]),
    UsersModule,
  ],
  controllers: [ColumnsController],
  providers: [ColumnsService],
  exports: [ColumnsService],
})
export class ColumnsModule {}
