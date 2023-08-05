import { Module } from '@nestjs/common';
import { UserModule } from './api/user/user.module';
import { OrmModule } from './orm/orm.module';
import { BookmarkModule } from './api/bookmark/bookmark.module';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [ OrmModule, UserModule, BookmarkModule, AuthModule],
  controllers: [ ],
  providers: [],
})
export class AppModule {}
