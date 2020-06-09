import { Module } from '@nestjs/common';
import { UsersService } from './cat.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class CatModule {}
