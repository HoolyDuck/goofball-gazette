import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogpostsService } from 'src/blogposts/blogposts.service';
import { Comment } from 'src/entities/comment.entity';
import { BlogPost } from 'src/entities/blogpost.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
    @InjectRepository(BlogPost)
    private blogPostsRepository: Repository<BlogPost>,
  ) {}

  async createComment(comment: Comment) {
    const newComment = this.commentsRepository.create(comment);
    return this.commentsRepository.save(newComment);
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
