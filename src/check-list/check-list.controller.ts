import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CheckListService } from './check-list.service';
import { CreateListItemDTO } from './dto/create-list.dto';

@Controller('check-list')
export class CheckListController {

    constructor(private CheckListService: CheckListService) { }

    @UseGuards(AuthGuard)
    @Get('/takeAll')
    getUsersList(@Req() req) {
        let user = req.user._id
        return this.CheckListService.getUsersList(user)
    }

    @UseGuards(AuthGuard)
    @Post('/create')
    async create(@Req() req, @Body() dto: CreateListItemDTO) {
        console.log(req.user)
        let user = req.user._id
        return await this.CheckListService.create(user, dto)
    }
}
