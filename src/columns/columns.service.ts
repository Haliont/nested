import { Injectable } from '@nestjs/common';
import { CreateColumnDto } from './create-column.dto';
import { UpdateColumnDto } from './update-column.dto';

@Injectable()
export class ColumnsService {
  async create(createColumnDto: CreateColumnDto) {
    return `Created user ${JSON.stringify(createColumnDto)}`;
  }

  async findAll() {
    return 'Find all Columns';
  }

  async findOne(id: string) {
    return `Found user with ${id} id`;
  }

  async update(id: string, updateColumnDto: UpdateColumnDto) {
    return `Updated user with ${id} id, updated fields ${JSON.stringify(updateColumnDto)}`;
  }

  async remove(id: string) {
    return `Removed user with ${id} id`;
  }
}
