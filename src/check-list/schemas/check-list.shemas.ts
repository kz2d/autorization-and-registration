import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/schemas/user.schemas';
import * as mongoose from 'mongoose';

export type CheckListDocument = CheckList & Document;

@Schema()
export class CheckList {
  @Prop()
  text: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'users' })
  owner: User;
}

export const CheckListSchema = SchemaFactory.createForClass(CheckList);