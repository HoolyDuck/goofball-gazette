import { Module } from '@nestjs/common';
import { BlogpostsController } from './blogposts.controller';
import { BlogpostsService } from './blogposts.service';
import { LocalStrategy } from 'src/auth/local.strategy';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPost } from 'src/entities/blogpost.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogPost])],
  providers: [BlogpostsService],
  controllers: [BlogpostsController],
  exports: [BlogpostsService],
})
export class BlogpostsModule {}
