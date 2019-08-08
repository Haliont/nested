import { Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  hello() {
    return 'Hello';
  }
}
