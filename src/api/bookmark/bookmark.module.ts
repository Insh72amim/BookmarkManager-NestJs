import { Module } from '@nestjs/common';
import { OrmModule } from '../../orm/orm.module';
import { BookmarkService } from './bookmark.service';
import { BookmarkController } from './bookmark.controller';

@Module({
  imports: [OrmModule],
  controllers: [BookmarkController],
  providers: [BookmarkService],
})

export class BookmarkModule {}
