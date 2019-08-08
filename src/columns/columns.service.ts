import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal, Not } from 'typeorm';
import { CreateColumnDto } from './create-column.dto';
import { UpdateColumnDto } from './update-column.dto';
import { Column } from './column.entity';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import { Card } from '../cards/card.entity';
import { CreateCardDto } from '../cards/create-card.dto';
import { CardsService } from '../cards/cards.service';

@Injectable()
export class ColumnsService {
  constructor(
    @InjectRepository(Column)
    private readonly columnsRepository: Repository<Column>,
    private readonly usersService: UsersService,
    private readonly cardsService: CardsService,
  ) {}

  async create(createColumnDto: CreateColumnDto, userId: string): Promise<Column> {
    const user: User = await this.usersService.findOne(userId);
    const createdColumn: Column = await this.columnsRepository.save(createColumnDto);
    createdColumn.user = user;
    return this.columnsRepository.save(createdColumn);
  }

  async findAll(userId): Promise<Column[]> {
    return this.columnsRepository.find({ where: { user: userId } });
  }

  async findOne(id: string): Promise<Column> {
    return this.columnsRepository.findOne(id);
  }

  async update(id: string, updateColumnDto: UpdateColumnDto): Promise<Column> {
    const column = await this.findOne(id);
    const updatedColumn = { ...column, ...updateColumnDto };
    return this.columnsRepository.save(updatedColumn);
  }

  async remove(id: string): Promise<Column> {
    const column = await this.findOne(id);
    return this.columnsRepository.remove(column);
  }

  async createColumnCard(columnId: string, createCardDto: CreateCardDto): Promise<Card> {
    const createdCard: Card = await this.cardsService.create(createCardDto);
    const column: Column = await this.findOne(columnId);
    createdCard.column = column;
    return this.cardsService.create(createdCard);
  }

  async findAllCards(columnId: string): Promise<Card[]> {
    return this.cardsService.findAll({ where: { column: columnId } });
  }
}
