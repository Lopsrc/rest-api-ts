import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { GetUserDTO } from './dto/getUser.dto';
import { DeleteUserDTO } from './dto/deleteUser.dto';
import { RecoverUserDTO } from './dto/recoverUser.dto';
import { Response } from 'express';

@Controller('api/users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) {}

    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() user: CreateUserDTO, @Res() res: Response){
        this.usersService.createUsers(user)
        .then(result => res.status(HttpStatus.CREATED).send({statusCode: HttpStatus.CREATED, data:{id: result}}))
        .catch(error => res.status(error.status).send({statusCode: error.status, error: error.message}));
    }
    
    @Get()
    getAll(@Res() res: Response){
        this.usersService.getAllUsers()
        .then(result => res.status(HttpStatus.OK).send({statusCode: HttpStatus.OK, data:result}))
        .catch(error => res.status(error.status).send({statusCode: error.status, error: error.message}));
    }

    @UsePipes(ValidationPipe)
    @Get(':id')
    get(@Param() dto: GetUserDTO, @Res() res: Response): void{
        this.usersService.getUser(dto)
        .then(result => res.status(HttpStatus.OK).send({status: HttpStatus.OK, data: result}))
        .catch(error => res.status(error.status).send({statusCode: error.status, error: error.message}));
    }

    @UsePipes(ValidationPipe)
    @Put()
    update(@Body() user: UpdateUserDTO,@Res() res: Response){
        this.usersService.updateUser(user)
        .then(result => res.status(HttpStatus.CREATED).send({status: HttpStatus.CREATED, data: result}))
        .catch(error => res.status(error.status).send({statusCode: error.status, error: error.message}));
    }

    @UsePipes(ValidationPipe)
    @Delete(':id')
    delete(@Param() user: DeleteUserDTO, @Res() res: Response){
        this.usersService.deleteUser(user)
        .then(result => res.status(HttpStatus.OK).send({status: HttpStatus.OK, data: result}))
        .catch(error => res.status(error.status).send({statusCode: error.status, error: error.message}));
    }
    
    @UsePipes(ValidationPipe)
    @Put(':id')
    recover(@Param() user: RecoverUserDTO, @Res() res: Response){
        this.usersService.recoverUser(user)
        .then(result => res.status(HttpStatus.CREATED).send({status: HttpStatus.CREATED, data: result}))
        .catch(error => res.status(error.status).send({statusCode: error.status, error: error.message}));
    }
}
