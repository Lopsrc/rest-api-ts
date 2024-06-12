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
var UsersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./users.entity");
const typeorm_2 = require("typeorm");
let UsersService = UsersService_1 = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.logger = new common_1.Logger(UsersService_1.name);
    }
    async createUsers(dto) {
        this.logger.log('Create user');
        return await this.userRepository.save(dto)
            .then((result => {
            this.logger.log('User is created');
            return result.id;
        }))
            .catch((error => {
            this.logger.error(`User isn't created: ${error.message}`);
            if (error.code === '23505') {
                throw new common_1.ConflictException('User is already exist');
            }
            return new common_1.InternalServerErrorException();
        }));
    }
    async getAllUsers() {
        this.logger.log('Get all users');
        return await this.userRepository.find()
            .then(result => {
            if (result.length === 0) {
                throw new common_1.NotFoundException("Users aren't found");
            }
            this.logger.log('Users are found');
            return result;
        })
            .catch(error => {
            this.logger.error("Users aren't found");
            if (error.status === 404) {
                throw error;
            }
            throw new common_1.InternalServerErrorException();
        });
    }
    async getUser(dto) {
        this.logger.log('Get user');
        return await this.userRepository.findOne({
            where: { id: dto.id }
        })
            .then(result => {
            if (!result) {
                throw new common_1.NotFoundException("User isn't found");
            }
            this.logger.log('User is found');
            return result;
        })
            .catch(error => {
            this.logger.error("User isn't found", error.status);
            if (error.status === 404) {
                throw error;
            }
            throw new common_1.InternalServerErrorException();
        });
    }
    async updateUser(dto) {
        this.logger.log('Update user');
        return await this.userRepository.update(dto.id, dto)
            .then(result => {
            if (!result.affected) {
                throw new common_1.NotFoundException("User isn't found");
            }
            this.logger.log('User is updated');
            return true;
        })
            .catch(error => {
            this.logger.error("User isn't updated");
            if (error.status === 404) {
                throw error;
            }
            throw new common_1.InternalServerErrorException();
        });
    }
    async deleteUser(dto) {
        this.logger.log('Delete user');
        return await this.userRepository.update(dto.id, { isDel: true })
            .then(result => {
            if (!result.affected) {
                throw new common_1.NotFoundException("User isn't found");
            }
            this.logger.log('User is deleted');
            return true;
        })
            .catch(error => {
            this.logger.error("User isn't deleted");
            if (error.status === 404) {
                throw error;
            }
            throw new common_1.InternalServerErrorException();
        });
    }
    async recoverUser(dto) {
        this.logger.log('Recover user');
        return await this.userRepository.update(dto.id, { isDel: false })
            .then(result => {
            if (!result.affected) {
                throw new common_1.NotFoundException("User isn't found");
            }
            this.logger.log('User is recovered');
            return true;
        })
            .catch(error => {
            this.logger.error("User isn't recovered");
            if (error.status === 404) {
                throw error;
            }
            throw new common_1.InternalServerErrorException();
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = UsersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map