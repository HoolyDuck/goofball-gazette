import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserCreateDto } from './dto/user-create.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<any[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<any> {
    return await this.userRepository.findOneBy({ id });
  }

  async create(user: UserCreateDto): Promise<any> {
    console.log(user);
    return await this.userRepository.save(user);
  }

  async update(id: number, user: UserCreateDto): Promise<any> {
    return await this.userRepository.update(id, user);
  }

  async delete(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }

  async findByEmail(email: string): Promise<any> {
    return await this.userRepository.findOne({ where: { email: email } });
  }
}
