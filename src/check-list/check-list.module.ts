import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { CheckListController } from './check-list.controller';
import { CheckListService } from './check-list.service';
import { CheckList, CheckListSchema } from './schemas/check-list.shemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CheckList.name, schema: CheckListSchema }]), 
     AuthModule
  ],
  controllers: [CheckListController],
  providers: [CheckListService]
})
export class CheckListModule { }
