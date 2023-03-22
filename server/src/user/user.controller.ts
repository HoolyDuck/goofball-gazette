import { Body, Controller, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Get, Param, Post, Put, Delete } from '@nestjs/common';
import { User } from './user.entity';
import { UserCreateDto } from './dto/user-create.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(): Promise<any[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: number): Promise<any> {
    return await this.userService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() user: UserCreateDto): Promise<any> {
    console.log(user);
    return await this.userService.create(user);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(
    @Param('id') id: number,
    @Body() user: UserCreateDto,
  ): Promise<any> {
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id') id: number): Promise<any> {
    return await this.userService.delete(id);
  }
}
