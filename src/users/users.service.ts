import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOneBy(id: number): Promise<User> {
    return this.usersRepository.findOneBy({id:id});
  }

  async create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async update(id: number, user: User): Promise<User> {
    await this.usersRepository.update(id, user);
    return this.usersRepository.findOneBy({id:id});
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}