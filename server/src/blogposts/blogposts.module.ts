import { Module } from '@nestjs/common';
import { BlogpostsController } from './blogposts.controller';
import { BlogpostsService } from './blogposts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPost } from 'src/entities/blogpost.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogPost])],
  providers: [BlogpostsService],
  controllers: [BlogpostsController],
  exports: [BlogpostsService],
})
export class BlogpostsModule {}
