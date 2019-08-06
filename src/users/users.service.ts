import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    return `Created user ${JSON.stringify(createUserDto)}`;
  }

  async findAll() {
    return 'Find all users';
  }

  async findOne(id: string) {
    return `Found user with ${id} id`;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return `Updated user with ${id} id, updated fields ${JSON.stringify(updateUserDto)}`;
  }

  async remove(id: string) {
    return `Removed user with ${id} id`;
  }
}
