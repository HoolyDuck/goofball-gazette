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

  async login(user: User) {
    return this.generateJWT(user);
  }

  async register(user: UserCreateDto): Promise<{ newUser: User, token: string }> {
    const userExists = await this.userService.findByEmail(user.email);

    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const hashPass = await bcrypt.hash(user.password, 5);
    const newUser = await this.userService.create({
      ...user,
      password: hashPass,
    });

    const { access_token } = await this.generateJWT(newUser);

    return { newUser: newUser, token: access_token };

  }

  private async generateJWT(user: User) {
    const payload = {
      id: user.id,
      username: user.username,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  public async validateUser(credential: string, password: string) : Promise<User> {
    const findUser = await this.userService.findByEmail(credential);
    if (findUser && (await bcrypt.compare(password, findUser.password))) {

      return findUser;
    }
    throw new UnauthorizedException('Invalid credentials');
  }
}
