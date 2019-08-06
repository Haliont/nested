import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardsDto } from './create-card.dto';
import { UpdateCardsDto } from './update-card.dto';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('users')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  async create(@Body() createCardsDto: CreateCardsDto) {
    return this.cardsService.create(createCardsDto);
  }

  @Get()
  async findAll() {
    return this.cardsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.cardsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCardsDto: UpdateCardsDto) {
    return this.cardsService.update(id, updateCardsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.cardsService.remove(id);
  }
}
