import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogPost } from 'src/entities/blogpost.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateBlogPostDto } from './dto/create-blogpost.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class BlogpostsService {

    constructor(
        @InjectRepository(BlogPost)
        private readonly blogPostRepository: Repository<BlogPost>,
    ) {

    }

    async findAll() {
        return await this.blogPostRepository.find();
    }

    async findOne(id: number) {
        return await this.blogPostRepository.findOneBy({ id: id });
    }

    async create(blogPost: BlogPost) {
        return await this.blogPostRepository.save(blogPost);
    }

    async update(id: number, blogPost: BlogPost) {
        return await this.blogPostRepository.update(id, blogPost);
    }

    async delete(id: number) {
        return await this.blogPostRepository.delete(id);
    }





}
