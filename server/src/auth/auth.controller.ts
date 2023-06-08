import { Body, ClassSerializerInterceptor, Controller, Get, Post, Req, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/entities/user.entity';
import { RegistrationDto } from 'src/dto/registration.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(
    @Req() request: Request,
    @Res({passthrough: true}) response: Response,
  ) {
    const { access_token } = await this.authService.login(<User>request.user);

    response.cookie('access_token', access_token, {
      httpOnly: true,
      expires: new Date(Date.now() + 900000),
    });

    return <User>request.user;
  }

  @Post('register')
  async register(
    @Body() user: RegistrationDto,
    @Res({passthrough: true}) response: Response,
  ) {
    const { userInfo, token } = await this.authService.register(user);

    response.cookie('access_token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 900000),
    });

    return userInfo;
  }

  @Get('auth')
  @UseGuards(AuthGuard('jwt'))
  async refresh(@Req() request: Request, @Res({passthrough: true}) response: Response) {
    const { userInfo, token } = await this.authService.refresh(<User>request.user);

    response.cookie('access_token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 900000),
    });

    return userInfo;
  }
}
