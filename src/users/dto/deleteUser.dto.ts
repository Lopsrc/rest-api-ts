import { Transform } from "class-transformer";
import { IsNumber } from "class-validator";

export class DeleteUserDTO {
    @IsNumber({}, {message: "Incorrect id"})
    @Transform(({ value }) => {
        return Number(value);
    })
    readonly id: number;
}