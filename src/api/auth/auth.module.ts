import { Module } from '@nestjs/common';
import { OrmModule } from '../../orm/orm.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [OrmModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService],
})

export class AuthModule {}
