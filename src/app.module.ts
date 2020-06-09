import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './config/config.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { CatModule } from './cat/cat.module';
@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync(
      {
        useFactory: async (configService: ConfigService) => {
          // typeorm bug, https://github.com/nestjs/nest/issues/1119
          // 将 type 定义为 type: 'mysql' | 'mariadb'; 解决此issue
          return configService.db;
        },
        inject: [ConfigService],
      }

    ),
    UsersModule,
    AuthModule,
    CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
