import { Body, Controller, Param, UseGuards } from '@nestjs/common';
import {Get, Post, Req, Res} from "@nestjs/common"
import { CommentsService } from './comments.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/entities/user.entity';
import { Comment } from 'src/entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { BlogPost } from 'src/entities/blogpost.entity';

@Controller('comments')
export class CommentsController {

    constructor(
        private commentsService: CommentsService
    ) {

    }

    @Get()
    async getComments(@Req() req) {
        const comments = await this.commentsService.getComments();
        return comments;
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    async createComment(@Req() req, @Body() comment: CreateCommentDto) {
        const user = <User>req.user;

        const newComment = new Comment();
        const blogPost = new BlogPost();
        blogPost.id = comment.blogPostId;

        newComment.content = comment.content;
        newComment.user = user;
        newComment.blogPost = blogPost;
        
        return await this.commentsService.createComment(newComment);
    }

    @Get('blogpost/:id')
    async getCommentsByBlogPostId(@Req() req, @Param("id") id) {
        return await this.commentsService.getCommentsByBlogPostId(id);
    }



}
