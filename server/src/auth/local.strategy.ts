import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserCreateDto } from 'src/user/dto/user-create.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(credential: string, password: string): Promise<User> {
    const validateUser = await this.authService.validateUser(
      credential,
      password,
    );

    if (!validateUser) {
      throw new UnauthorizedException('Pizda');
    }
    return validateUser;
  }
}
