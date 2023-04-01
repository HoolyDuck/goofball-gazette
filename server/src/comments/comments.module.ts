import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from 'src/entities/comment.entity';
import { BlogPost } from 'src/entities/blogpost.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), TypeOrmModule.forFeature([BlogPost])],
  providers: [CommentsService],
  controllers: [CommentsController],
  exports: [CommentsService],
})
export class CommentsModule {}
