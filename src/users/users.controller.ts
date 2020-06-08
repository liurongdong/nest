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

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) { }
  @Post()
  findOrCreate(@Body() createUserDto: CreateUserDto) {
    Logger.log(createUserDto);

    return this.usersService.findAll()
  }
}
