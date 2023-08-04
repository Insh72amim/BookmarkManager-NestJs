import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Bookmark, Tag, User } from '../entities';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature({
      entities: [Bookmark, User, Tag],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule { }
