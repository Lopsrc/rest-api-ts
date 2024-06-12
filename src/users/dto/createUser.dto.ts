import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateUserDTO{
    @IsEmail({}, {message: "Incorrect email"})
    readonly email: string;
    
    @IsString({message: "Incorrect name"})
    readonly firstName: string;
    
    @IsNumber({}, {message: "Incorrect age"})
    readonly age: number;
}