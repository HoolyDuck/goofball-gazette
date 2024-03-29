import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { OneToMany } from "typeorm";
import { BlogPost } from "./blogpost.entity";
import { Comment } from "./comment.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Exclude()
    @Column('varchar', {name: 'password', length: 255})
    password: string;

    @OneToMany(() => BlogPost, blogPost => blogPost.user, {
        cascade: true,
        nullable: true,
    })  
    blogPosts: BlogPost[];

    @OneToMany(() => Comment, comment => comment.user, {
        cascade: true,
        nullable: true,
    })
    comments: Comment[];

}