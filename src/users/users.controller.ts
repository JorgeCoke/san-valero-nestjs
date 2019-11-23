import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './classes/user';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get('/')
    getUsers() {
        return this.usersService.getAllUsers();
    }

    @Post('/')
    insertUser(@Body() body: User) {
        return this.usersService.insertUser(body);
    }

    @Get('/:id')
    getUserById(@Param('id') id: string) {
        return this.usersService.getById(Number(id));
    }

    @Delete('/:id')
    deleteUserById(@Param('id') id: string) {
        return this.usersService.deleteById(Number(id));
    }

}
