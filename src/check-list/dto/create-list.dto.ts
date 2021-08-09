import { Length } from "class-validator";

export class CreateListItemDTO{
    @Length(4, 100, {message: 'Не меньше 4 и не больше 10'})
    text:String;
}