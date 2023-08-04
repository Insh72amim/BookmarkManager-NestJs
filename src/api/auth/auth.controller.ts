import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('signup')
  getHello(): string {
    return 'Hi';
  }
}
