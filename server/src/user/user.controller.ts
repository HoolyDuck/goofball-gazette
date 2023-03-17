import { Body, Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Get, Param, Post, Put, Delete,  } from '@nestjs/common';
import { User } from './user.entity';
import { UserCreateDto } from './dto/user-create.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<any[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    return await this.userService.findOne(id);
  }

  @Post()
  async create(@Body() user: UserCreateDto): Promise<any> {
    console.log(user)
    return await this.userService.create(user);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: UserCreateDto): Promise<any> {
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    return await this.userService.delete(id);
  }
}
