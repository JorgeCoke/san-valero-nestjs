import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dtos/login.dto';
import { SignupDto } from './dtos/signup.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService) {}

    signUp(signupDto: SignupDto) {
        signupDto.password = bcrypt.hashSync(signupDto.password, 10);
        return this.userService.insertUser(signupDto);
    }

    logIn(loginDto: LoginDto) {
        const userFound = this.userService.findByEmail(loginDto.email);
        if (!userFound) {
            throw new BadRequestException();
        }
        if (!bcrypt.compareSync(loginDto.password, userFound.password)) {
            throw new BadRequestException();
        }
        return {
            type: 'Bearer',
            token: 'asdfghjklasdfghjksdfghjdfghjsdfgh'
        };
    }

}
