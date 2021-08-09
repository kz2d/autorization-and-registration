import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDTO } from 'src/user/dto/loginUser.dto';
import { CreateUserDTO } from 'src/user/dto/createUserDTO.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private AuthService:AuthService){}

    @Post("registration")
    registration(@Body()dto:CreateUserDTO) {
        console.log(dto)
        return this.AuthService.registration(dto)
    }

    @Post("login")
    login(@Body()dto:LoginUserDTO) {
        return this.AuthService.login(dto)
    }
}
