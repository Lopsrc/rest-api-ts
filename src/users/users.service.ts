import { ConflictException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { Repository } from 'typeorm';
import { GetUserDTO } from './dto/getUser.dto';
import { DeleteUserDTO } from './dto/deleteUser.dto';
import { RecoverUserDTO } from './dto/recoverUser.dto';

@Injectable()
export class UsersService {

    private readonly logger = new Logger(UsersService.name);

    constructor(
        @InjectRepository(User) 
        private userRepository: Repository<User>
    ) {}
    async createUsers(dto: CreateUserDTO): Promise<any>{
        this.logger.log('Create user');
        return await this.userRepository.save(dto)
        .then((result => {
            this.logger.log('User is created');
            return result.id;
        }))
        .catch((error => {
            this.logger.error(`User isn't created: ${error.message}`);
            if (error.code === '23505'){
                throw new ConflictException('User is already exist');
            }
            return new InternalServerErrorException();
        }))
    }
    
    async getAllUsers(): Promise<User[]>{
        this.logger.log('Get all users');
        return await this.userRepository.find()
        .then(result => {
            if (result.length === 0) {
                throw new NotFoundException("Users aren't found");
            }
            this.logger.log('Users are found');
            return result;
        })
        .catch(error => {
            this.logger.error("Users aren't found");
            if (error.status === 404){
                throw error;
            }
            throw new InternalServerErrorException();
        });
    }

    async getUser(dto: GetUserDTO): Promise<User>{
        this.logger.log('Get user');
        return await this.userRepository.findOne({
            where: {id: dto.id}
        })
        .then(result => {
            if (!result) {
                throw new NotFoundException("User isn't found");
            }
            this.logger.log('User is found');
            return result;
        })
        .catch(error => {
            this.logger.error("User isn't found", error.status);
            if (error.status === 404){
                throw error;
            }
            throw new InternalServerErrorException();
        });
    }

    async updateUser(dto: UpdateUserDTO): Promise<boolean>{
        this.logger.log('Update user');
        return await this.userRepository.update(dto.id, dto)
        .then(result => {
            if (!result.affected){
                throw new NotFoundException("User isn't found");
            }
            this.logger.log('User is updated');
            return true;
        })
        .catch(error => {
            this.logger.error("User isn't updated");
            if (error.status === 404){
                throw error;
            }
            throw new InternalServerErrorException();
        });
    }

    async deleteUser(dto: DeleteUserDTO): Promise<boolean>{
        this.logger.log('Delete user');
        return await this.userRepository.update(dto.id, {isDel: true})
        .then(result => {
            if (!result.affected){
                throw new NotFoundException("User isn't found");
            }
            this.logger.log('User is deleted');
            return true;
        })
        .catch(error => {
            this.logger.error("User isn't deleted");
            if (error.status === 404){
                throw error;
            }
            throw new InternalServerErrorException();
        });
    }

    async recoverUser(dto: RecoverUserDTO): Promise<boolean>{
        this.logger.log('Recover user');
        return await this.userRepository.update(dto.id, {isDel: false})
        .then(result => {
            if (!result.affected){
                throw new NotFoundException("User isn't found");
            }
            this.logger.log('User is recovered');
            return true;
        })
        .catch(error => {
            this.logger.error("User isn't recovered");
            if (error.status === 404){
                throw error;
            }
            throw new InternalServerErrorException();
        });
    }
}
