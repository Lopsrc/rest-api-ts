import { Transform } from "class-transformer";
import { IsNumber } from "class-validator";

export class GetUserDTO {
    @IsNumber({}, {message: "Incorrect id"})
    @Transform(({ value }) => {
        return Number(value);
    })
    readonly id: number;
}