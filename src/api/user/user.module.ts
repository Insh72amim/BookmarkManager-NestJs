import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { OrmModule } from '../../orm/orm.module';
import { UserService } from './user.service';

@Module({
  imports: [OrmModule],
  controllers: [UserController],
  providers: [UserService],
})

export class UserModule {}