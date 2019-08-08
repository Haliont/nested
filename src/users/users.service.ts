import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { User } from './user.entity';

type User2 = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  private readonly users: User2[];

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ username });
  }

  async findOne(id: string): Promise<User | undefined> {
    return this.usersRepository.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = await this.findOne(id);
    const updatedUser = { ...user, ...updateUserDto };
    return this.usersRepository.save(updatedUser);
  }

  async remove(id: string): Promise<User> {
    const user: User = await this.findOne(id);
    return this.usersRepository.remove(user);
  }
}
