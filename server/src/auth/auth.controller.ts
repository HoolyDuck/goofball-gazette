import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDto } from 'src/user/dto/user-create.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}


    @Post('login')
    async login(@Body() loginDto: UserCreateDto) {
        return this.authService.login(loginDto);
    }

    @Post('register')
    async register(@Body() registerDto: UserCreateDto) {
        return this.authService.register(registerDto);
    }   


}
