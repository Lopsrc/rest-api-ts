import { User } from './users.entity';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { Repository } from 'typeorm';
import { GetUserDTO } from './dto/getUser.dto';
import { DeleteUserDTO } from './dto/deleteUser.dto';
import { RecoverUserDTO } from './dto/recoverUser.dto';
export declare class UsersService {
    private userRepository;
    private readonly logger;
    constructor(userRepository: Repository<User>);
    createUsers(dto: CreateUserDTO): Promise<any>;
    getAllUsers(): Promise<User[]>;
    getUser(dto: GetUserDTO): Promise<User>;
    updateUser(dto: UpdateUserDTO): Promise<boolean>;
    deleteUser(dto: DeleteUserDTO): Promise<boolean>;
    recoverUser(dto: RecoverUserDTO): Promise<boolean>;
}
