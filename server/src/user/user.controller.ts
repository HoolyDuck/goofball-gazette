import { Body, Controller, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Get, Param, Post, Put, Delete } from '@nestjs/common';
import { User } from './user.entity';
import { UserCreateDto } from './dto/user-create.dto';
import { JWTAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JWTAuthGuard)
  async findAll(): Promise<any[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  @UseGuards(JWTAuthGuard)
  async findOne(@Param('id') id: number): Promise<any> {
    return await this.userService.findOne(id);
  }

  @Post()
  @UseGuards(JWTAuthGuard)
  async create(@Body() user: UserCreateDto): Promise<any> {
    console.log(user);
    return await this.userService.create(user);
  }

  @Put(':id')
  @UseGuards(JWTAuthGuard)
  async update(
    @Param('id') id: number,
    @Body() user: UserCreateDto,
  ): Promise<any> {
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  @UseGuards(JWTAuthGuard)
  async delete(@Param('id') id: number): Promise<any> {
    return await this.userService.delete(id);
  }
}
