import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class BlogPost {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @ManyToOne(() => User, user => user.blogPosts, {
        nullable: false,
        eager: true,
    })
    user: User;



    
}