import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginUserDTO } from './dto/loginUser.dto';
import { CreateUserDTO } from './dto/createUserDTO.dto';
import { User, UserDocument } from './schemas/user.schemas';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {

    constructor(private UserService:UserService,){}

    
    @UseGuards(AuthGuard)
    @Get("getUser")
    getAll(@Req() req){
        return this.UserService.findByIdWithoutPassword(req.user._id)
    }
}
