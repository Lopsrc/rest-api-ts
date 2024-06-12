"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const createUser_dto_1 = require("./dto/createUser.dto");
const updateUser_dto_1 = require("./dto/updateUser.dto");
const getUser_dto_1 = require("./dto/getUser.dto");
const deleteUser_dto_1 = require("./dto/deleteUser.dto");
const recoverUser_dto_1 = require("./dto/recoverUser.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(user, res) {
        this.usersService.createUsers(user)
            .then(result => res.status(common_1.HttpStatus.CREATED).send({ statusCode: common_1.HttpStatus.CREATED, data: { id: result } }))
            .catch(error => res.status(error.status).send({ statusCode: error.status, error: error.message }));
    }
    getAll(res) {
        this.usersService.getAllUsers()
            .then(result => res.status(common_1.HttpStatus.OK).send({ statusCode: common_1.HttpStatus.OK, data: result }))
            .catch(error => res.status(error.status).send({ statusCode: error.status, error: error.message }));
    }
    get(dto, res) {
        this.usersService.getUser(dto)
            .then(result => res.status(common_1.HttpStatus.OK).send({ status: common_1.HttpStatus.OK, data: result }))
            .catch(error => res.status(error.status).send({ statusCode: error.status, error: error.message }));
    }
    update(user, res) {
        this.usersService.updateUser(user)
            .then(result => res.status(common_1.HttpStatus.CREATED).send({ status: common_1.HttpStatus.CREATED, data: result }))
            .catch(error => res.status(error.status).send({ statusCode: error.status, error: error.message }));
    }
    delete(user, res) {
        this.usersService.deleteUser(user)
            .then(result => res.status(common_1.HttpStatus.OK).send({ status: common_1.HttpStatus.OK, data: result }))
            .catch(error => res.status(error.status).send({ statusCode: error.status, error: error.message }));
    }
    recover(user, res) {
        this.usersService.recoverUser(user)
            .then(result => res.status(common_1.HttpStatus.CREATED).send({ status: common_1.HttpStatus.CREATED, data: result }))
            .catch(error => res.status(error.status).send({ statusCode: error.status, error: error.message }));
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDTO, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAll", null);
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getUser_dto_1.GetUserDTO, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "get", null);
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateUser_dto_1.UpdateUserDTO, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deleteUser_dto_1.DeleteUserDTO, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "delete", null);
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recoverUser_dto_1.RecoverUserDTO, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "recover", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('api/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map