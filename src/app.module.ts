import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CheckListService } from './check-list/check-list.service';
import { CheckListModule } from './check-list/check-list.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UserModule,
    AuthModule,
    CheckListModule
  ],
  providers: []
})
export class AppModule { }
