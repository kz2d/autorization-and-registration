import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserDTO } from 'src/user/dto/loginUser.dto';
import { CreateUserDTO } from 'src/user/dto/createUserDTO.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt"
import { User, UserDocument } from 'src/user/schemas/user.schemas';

@Injectable()
export class AuthService {

    constructor(private UserService: UserService,
        private jwtService: JwtService) { }

    async registration(dto: CreateUserDTO) {
        const candidate = await this.UserService.findByEmail(dto.email);
        if (candidate) {
            throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST);
        }
        let user = await this.UserService.create(dto)
        return this.generateToken(user)
    }

    async login(dto: LoginUserDTO) {
        let user = await this.validateUser(dto)
        return this.generateToken(user)
    }

    private async generateToken(dto: UserDocument) {
        const payload = { email: dto.email, _id: dto._id }
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: LoginUserDTO) {
        const user = await this.UserService.findByEmail(userDto.email);
        if (!user) {
            throw new UnauthorizedException({ message: 'Некорректный емайл' })
        }
        //const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        const passwordEquals = userDto.password == user.password
        if (passwordEquals) {
            return user;
        }
        throw new UnauthorizedException({ message: 'Некорректный емайл или пароль' })
    }
}
