import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CatModule } from '../cat/cat.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
@Module({
  providers: [AuthService, LocalStrategy],
  imports: [CatModule, PassportModule],
})
export class AuthModule {}
