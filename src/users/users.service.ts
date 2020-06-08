import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './interfaces/user.interface';
import { Repository } from 'typeorm';
// import { UserEntity } from '../entity/users.entity';
import { UserEntity } from '../entity/entities/UserEntity.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  create(user: User) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find({
      where: {
        id: 6,
      },
    });
  }
}
