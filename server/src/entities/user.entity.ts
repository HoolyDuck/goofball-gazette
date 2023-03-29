import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";

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
}