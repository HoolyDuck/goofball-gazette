import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { BlogPost } from "./blogpost.entity";

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne(() => User, user => user.comments, {
        nullable: false,
        eager: true,
    })
    user: User;

    @ManyToOne(() => BlogPost, blogPost => blogPost.comments, {
        nullable: false,
    })
    blogPost: BlogPost;

    


}