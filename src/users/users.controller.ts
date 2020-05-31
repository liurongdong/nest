import {
  Controller,
  Get,
  Res,
  Param,
  Logger,
  HttpStatus,
  Post,
  Body,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  findOrCreate(@Body() createUserDto: CreateUserDto) {
    Logger.log(createUserDto);
    this.usersService.create(createUserDto);
    return {
      nihao: '89890908',
    };
  }
}
