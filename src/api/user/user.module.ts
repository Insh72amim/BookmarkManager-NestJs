import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { OrmModule } from '../../orm/orm.module';
import { UserService } from './user.service';
import { JwtStrategy } from '../auth/strategy';

@Module({
  imports: [OrmModule],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
})

export class UserModule {}
