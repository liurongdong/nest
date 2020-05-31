import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '47.97.201.129',
      port: 3306,
      username: 'liuuu',
      password: 'lrd6274...',
      database: 'liuuu',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
