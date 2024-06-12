import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: false})
    email: string;

    @Column({nullable: false})
    firstName: string;

    @Column({nullable: false})
    age: number;

    @Column({ default: false })
    isDel: boolean;
}