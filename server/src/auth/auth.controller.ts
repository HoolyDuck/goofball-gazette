import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { UserCreateDto } from 'src/user/dto/user-create.dto';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(
    @Req() req: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    const access_token = await this.authService.login(<User>req.user);

    response.cookie('access_token', access_token, {
      httpOnly: true,
      expires: new Date(Date.now() + 900000),
    });

    return req.user;
  }

  @Post('register')
  async register(@Body() registerDto: UserCreateDto) {
    return this.authService.register(registerDto);
  }
}
