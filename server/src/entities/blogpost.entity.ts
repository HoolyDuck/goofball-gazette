import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ManyToOne, OneToMany } from "typeorm";
import { User } from "./user.entity";
import { Comment } from "./comment.entity";

@Entity()
export class BlogPost {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column({
        nullable: true,
    })
    description: string;

    @ManyToOne(() => User, user => user.blogPosts, {
        nullable: false,
        eager: true,
    })
    user: User;

    @OneToMany(() => Comment, comment => comment.blogPost, {
        nullable: true,
        eager: true,
    })
    comments: Comment[];


    
}