import { IsEmail, Length } from "class-validator";

export class LoginUserDTO {
    
    @IsEmail({}, {message: "Некорректный email"})
    email: String;

    @Length(4, 10, {message: 'Не меньше 4 и не больше 10'})
    password: String
}