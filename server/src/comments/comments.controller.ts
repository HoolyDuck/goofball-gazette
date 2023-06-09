import { Body, Controller, Param, UseGuards } from '@nestjs/common';
import {Get, Post, Req, Res} from "@nestjs/common"
import { CommentsService } from './comments.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/entities/user.entity';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { BlogpostsService } from 'src/blogposts/blogposts.service';

@Controller('comments')
export class CommentsController {

    constructor(
        private commentsService: CommentsService,
        private blogPostsService: BlogpostsService,
    ) {}

    @Get()
    async getComments() {
        return await this.commentsService.getComments();
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    async createComment(@Req() request, @Body() comment: CreateCommentDto) {
        const user = <User>request.user;
        const blogPost = await this.blogPostsService.findOne(comment.blogPostId);

        return await this.commentsService.createComment(comment, blogPost, user);
    }

    @Get('blogpost/:id')
    async getCommentsByBlogPostId(@Param("id") id) {
        return await this.commentsService.getCommentsByBlogPostId(id);
    }



}
