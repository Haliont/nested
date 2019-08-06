import { Injectable } from '@nestjs/common';
import { CreateCardsDto } from './create-card.dto';
import { UpdateCardsDto } from './update-card.dto';

@Injectable()
export class CardsService {
  async create(createUserDto: CreateCardsDto) {
    return `Created user ${JSON.stringify(createUserDto)}`;
  }

  async findAll() {
    return 'Find all users';
  }

  async findOne(id: string) {
    return `Found user with ${id} id`;
  }

  async update(id: string, updateCardsDto: UpdateCardsDto) {
    return `Updated user with ${id} id, updated fields ${JSON.stringify(updateCardsDto)}`;
  }

  async remove(id: string) {
    return `Removed user with ${id} id`;
  }
}
