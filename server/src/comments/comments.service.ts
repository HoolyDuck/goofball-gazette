import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogpostsService } from 'src/blogposts/blogposts.service';
import { Comment } from 'src/entities/comment.entity';
import { BlogPost } from 'src/entities/blogpost.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
    @InjectRepository(BlogPost)
    private blogPostsRepository: Repository<BlogPost>,
  ) {}

  async createComment(comment: CreateCommentDto, blogPost: BlogPost,  user: User) {
    const commentToDb = {
      ...comment,
      user: user,
      blogPost: blogPost,
    };

    return this.commentsRepository.save(commentToDb);
  }

  async getComments() {
    return this.commentsRepository.find();
  }

  async getCommentsByBlogPostId(blogPostId: number) {
    return this.blogPostsRepository.findOne({
      where: { id: blogPostId },
      relations: ['comments'],
    });
  }
}
