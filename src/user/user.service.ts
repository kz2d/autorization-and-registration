import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model, Mongoose } from 'mongoose';
import { LoginUserDTO } from './dto/loginUser.dto';
import { CreateUserDTO } from './dto/createUserDTO.dto';
import { User, UserDocument } from './schemas/user.schemas';

@Injectable()
export class UserService {
    u:CreateUserDTO[]=[]

    constructor(@InjectConnection() private connection: Connection,
    @InjectModel(User.name) private userModel: Model<UserDocument>){}

    async create(dto: CreateUserDTO){
        const user = await this.userModel.create(dto)
        return user;
    }

    findByEmail(email:String){
        return this.userModel.findOne({ 'email': email as string })
    }

    takeAll(){
        return this.userModel.find()
    }
}
