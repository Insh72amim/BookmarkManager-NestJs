import { Module } from '@nestjs/common';
import { BookmarkController } from './api/bookmark/bookmark.controller';
import { BookmarkService } from './api/bookmark/bookmark.service';
import { AuthController } from './api/auth/auth.controller';
import { AuthService } from './api/auth/auth.service';
import { UserController } from './api/user/user.controller';
import { UserService } from './api/user/user.service';
import { UserModule } from './api/user/user.module';
import { OrmModule } from './orm/orm.module';
import { BookmarkModule } from './api/bookmark/bookmark.module';

@Module({
  imports: [ OrmModule, UserModule, BookmarkModule],
  controllers: [ ],
  providers: [],
})
export class AppModule {}
