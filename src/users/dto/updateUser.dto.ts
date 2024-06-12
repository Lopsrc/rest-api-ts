import { IsNumber, IsString } from "class-validator";

export class UpdateUserDTO{
    @IsNumber({}, {message: "Incorrect id"})
    readonly id: number;

    @IsString({message: "Incorrect name"})
    readonly firstName: string;
    
    @IsNumber({}, {message: "Incorrect age"})
    readonly age: number;
}