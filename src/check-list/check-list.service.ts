import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateListItemDTO } from './dto/create-list.dto';
import { CheckList, CheckListDocument } from './schemas/check-list.shemas';

@Injectable()
export class CheckListService {

    constructor(
        @InjectModel(CheckList.name) private checkListModel: Model<CheckListDocument>) { }

    async getUsersList(user: String) {
        let list = await this.checkListModel.find({ 'owner': user as any })
        return list
    }

    async create(user: String, dto: CreateListItemDTO) {
        console.log(user)
        let list = await this.checkListModel.create({ 'owner': user as any, ...dto })
        return list
    }
}
