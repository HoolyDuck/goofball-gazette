import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserCreateDto } from 'src/user/dto/user-create.dto';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(user: UserCreateDto) {
    const findUser = await this.validateUser(user);
    return this.generateJWT(findUser);
  }

  async register(user: UserCreateDto) {
    const userExists = await this.userService.findByEmail(user.email);

    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const hashPass = await bcrypt.hash(user.password, 5);
    const newUser = await this.userService.create({
      ...user,
      password: hashPass,
    });

    return this.generateJWT(newUser);
  }

  private async generateJWT(user: User) {
    const payload = {
      id: user.id,
      email: user.email,
      username: user.username,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(user: UserCreateDto) {
    const findUser = await this.userService.findByEmail(user.email);
    if (findUser && (await bcrypt.compare(user.password, findUser.password))) {
      return findUser;
    }
    throw new UnauthorizedException('Invalid credentials');
  }
}
