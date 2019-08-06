import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { CreateColumnDto } from './create-column.dto';
import { UpdateColumnDto } from './update-column.dto';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('Columns')
export class ColumnsController {
  constructor(private readonly columnsService: ColumnsService) {}

  @Post()
  async create(@Body() createColumnDto: CreateColumnDto) {
    return this.columnsService.create(createColumnDto);
  }

  @Get()
  async findAll() {
    return this.columnsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.columnsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateColumnDto: UpdateColumnDto) {
    return this.columnsService.update(id, updateColumnDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.columnsService.remove(id);
  }
}
