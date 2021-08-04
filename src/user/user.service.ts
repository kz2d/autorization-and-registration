import { Injectable, Logger } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { RegistrationDTO } from './dto/registration.dto';

@Injectable()
export class UserService {
    u:RegistrationDTO[]=[]


    registration(dto:RegistrationDTO){
        this.u.push(dto)
    }

    login(dto:LoginDTO){
        let user=this.u.find((e)=>e.email===dto.email)
        if(!user)return "rejected"
        if(user.password==dto.password){
            return user
        }
        return "rejected"
    }

    takeAll(){
        return this.u
    }
}
