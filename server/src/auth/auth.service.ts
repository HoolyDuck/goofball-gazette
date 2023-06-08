import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/entities/user.entity';
import { TokenDto } from 'src/dto/token.dto';
import { RegistrationDto } from 'src/dto/registration.dto';
import { UserInfoDto } from 'src/dto/user-info.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(user: User): Promise<TokenDto> {
    return this.generateJWT(user);
  }

  async register(
    user: RegistrationDto,
  ): Promise<{ userInfo: UserInfoDto; token: string }> {
    const userExists = await this.userService.findByEmail(user.email);

    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const hashPass = await bcrypt.hash(user.password, 5);
    const newUser: User = await this.userService.create({
      ...user,
      password: hashPass,
    });

    const { access_token } = await this.generateJWT(newUser);

    return {
      userInfo: {
        id: newUser.id,
        username: newUser.username,
      },
      token: access_token,
    };
  }

  public async refresh(user: User): Promise<{userInfo: UserInfoDto, token: string}> {
    return {
      userInfo: {
        id: user.id,
        username: user.username,
      },
      token: await this.generateJWT(user).then((res) => res.access_token),
    }
  }

  private async generateJWT(user: User): Promise<TokenDto> {
    const payload = {
      id: user.id,
      username: user.username,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  public async validateUser(
    credential: string,
    password: string,
  ): Promise<User> {
    const findUser = await this.userService.findByEmail(credential);
    if (findUser && (await bcrypt.compare(password, findUser.password))) {
      return findUser;
    }
    throw new UnauthorizedException('Invalid credentials');
  }
}
