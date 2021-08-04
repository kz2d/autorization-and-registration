import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { RegistrationDTO } from './dto/registration.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private UserService:UserService){}

    @Post("registration")
    registration(@Body()dto:RegistrationDTO) {
        return this.UserService.registration(dto)
    }

    @Post("login")
    login(@Body()dto:LoginDTO) {
        return this.UserService.login(dto)
    }

    @Get("getAll")
    getAll(){
        return this.UserService.takeAll()
    }
}
