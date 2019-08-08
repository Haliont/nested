import { Controller, Get, Post, Param, Body, Put, Delete, Req, UseGuards } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { CreateColumnDto } from './create-column.dto';
import { UpdateColumnDto } from './update-column.dto';
import { User } from '../users/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { CreateCardDto } from '../cards/create-card.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('columns')
export class ColumnsController {
  constructor(private readonly columnsService: ColumnsService) {}

  @Post()
  async create(@Body() createColumnDto: CreateColumnDto, @Req() { user }: { user: User }) {
    return this.columnsService.create(createColumnDto, user.id);
  }

  @Get()
  async findAll(@Req() { user }: { user: User }) {
    const userId: string = user.id;
    return this.columnsService.findAll(userId);
  }

  @Get(':id')
  async findOne(
    @Param('id') columnId: string,
    @Req() { user }: { user: User },
  ) {
    const userId: string = user.id;
    return this.columnsService.findOne(columnId);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateColumnDto: UpdateColumnDto,
    @Req() { user }: { user: User },
  ) {
    return this.columnsService.update(id, updateColumnDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.columnsService.remove(id);
  }

  @Post(':columnId/cards')
  async createColumnCard(
    @Param('columnId') columnId: string,
    @Body() createCardDto: CreateCardDto,
  ) {
    return this.columnsService.createColumnCard(columnId, createCardDto);
  }

  @Get(':columnId/cards')
  async findAllCards(@Param('columnId') columnId: string) {
    return this.columnsService.findAllCards(columnId);
  }
}
