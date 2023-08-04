import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { User, Bookmark } from './entities';

const logger = new Logger('MikroORM');
const config: Options = {
  entities: [User, Bookmark],
  dbName: 'BMS',
  type: 'postgresql',
  user : process.env.PG_USER,
  password : process.env.PG_PASS,
  port: 5566,
  debug: true,
  logger: logger.log.bind(logger),
};

export default config;
