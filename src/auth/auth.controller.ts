import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';
import { SignupDto } from './dtos/signup.dto';
import { UsersService } from '../users/users.service';
import { ApiUseTags } from '@nestjs/swagger';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from './auth.service';
import { PasswordInterceptor } from '../interceptors/password.interceptor';

@ApiUseTags('auth')
@Controller('auth')
@UseInterceptors(PasswordInterceptor)
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/sign-up')
    signUp(@Body() body: SignupDto) {
        return this.authService.signUp(body);
    }

    @Post('/log-in')
    logIn(@Body() body: LoginDto) {
        return this.authService.logIn(body);
    }

}
