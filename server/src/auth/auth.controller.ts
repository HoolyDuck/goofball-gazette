import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { UserCreateDto } from 'src/user/dto/user-create.dto';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Req() req: Request,
    @Res({ passthrough: true }) response: Response,
    @Body() loginDto: UserCreateDto,
  ) {
    const access_token = this.authService.login(loginDto);

    response.cookie('access_token', access_token, {
      httpOnly: true,
      expires: new Date(Date.now() + 900000),
    });

    return this.authService.validateUser(loginDto);
  }

  @Post('register')
  async register(@Body() registerDto: UserCreateDto) {
    return this.authService.register(registerDto);
  }
}
