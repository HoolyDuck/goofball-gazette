import { Controller, Req, Res, UseGuards } from '@nestjs/common';
import { BlogpostsService } from './blogposts.service';
import { Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BlogPost } from 'src/entities/blogpost.entity';
import { AuthGuard } from '@nestjs/passport';
import { CreateBlogPostDto } from './dto/create-blogpost.dto';
import { User } from 'src/entities/user.entity';
import { Request } from 'express';

@Controller('blogposts')
export class BlogpostsController {
  constructor(private readonly blogpostsService: BlogpostsService) {}

  @Get()
  async findAll() {
    return await this.blogpostsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.blogpostsService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Req() req: Request, @Body() blogpost: CreateBlogPostDto) {
    const user = <User>req.user;
    return await this.blogpostsService.create(blogpost, user);
  }

}
