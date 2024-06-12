import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { GetUserDTO } from './dto/getUser.dto';
import { DeleteUserDTO } from './dto/deleteUser.dto';
import { RecoverUserDTO } from './dto/recoverUser.dto';
import { Response } from 'express';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(user: CreateUserDTO, res: Response): void;
    getAll(res: Response): void;
    get(dto: GetUserDTO, res: Response): void;
    update(user: UpdateUserDTO, res: Response): void;
    delete(user: DeleteUserDTO, res: Response): void;
    recover(user: RecoverUserDTO, res: Response): void;
}
