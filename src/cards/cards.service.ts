import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions, FindOneOptions } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './create-card.dto';
import { UpdateCardDto } from './update-card.dto';
import { Card } from './card.entity';
// import { UsersService } from '../users/users.service';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private readonly cardsRepository: Repository<Card>,
    // private readonly usersService: UsersService,
  ) {}

  async create(createCardDto: CreateCardDto): Promise<Card> {
    // const createdCard = await this.cardsRepository.save(createCardDto);
    // const user = await this.usersService.findOne(userId);
    // createdCard.
    return this.cardsRepository.save(createCardDto);
  }

  async findAll(options?: FindManyOptions<Card>) {
    return this.cardsRepository.find(options);
  }

  async findOne(id: string, options?: FindOneOptions<Card>): Promise<Card> {
    return this.cardsRepository.findOne(id, options);
  }

  async update(id: string, updateCardDto: UpdateCardDto): Promise<Card> {
    const card: Card = await this.findOne(id);
    const updatedCard = { ...card, ...updateCardDto };
    return this.cardsRepository.save(updatedCard);
  }

  async remove(id: string): Promise<Card> {
    const card: Card = await this.findOne(id);
    return this.cardsRepository.remove(card);
  }
}
