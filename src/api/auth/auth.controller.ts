import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDTO } from 'src/dtos';
import { AuthService } from './auth.service';
import { User } from 'src/entities';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService : AuthService){}

  @Post('signup')
  signup(@Body() user : UserDTO) : Promise<UserDTO>{
    console.log('hello');
    return this.authService.signup(user);
  }

  @Post('signin')
  signin(@Body() user : UserDTO) : Promise<UserDTO>{
    return this.authService.signin(user);
  }
}
