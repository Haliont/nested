import { Controller, Get, Post, Param, Body, Put, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CardsService } from './cards.service';
import { CreateCardDto } from './create-card.dto';
import { UpdateCardDto } from './update-card.dto';
import { User } from '../users/user.entity';

@UseGuards(AuthGuard('jwt'))
@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  async create(
    @Body() createCardDto: CreateCardDto,
    @Req() { user }: { user: User },
  ) {
    return this.cardsService.create(createCardDto);
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
  async update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
    return this.cardsService.update(id, updateCardDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.cardsService.remove(id);
  }
}
