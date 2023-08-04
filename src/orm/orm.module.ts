import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Bookmark, User } from '../entities';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature({
      entities: [Bookmark, User],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule { }
