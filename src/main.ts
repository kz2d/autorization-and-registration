import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipes/validation-pipe.pipe';

async function bootstrap() {
  let port=process.env.PORT||3000
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin:"http://localhost:3000",credentials:true})
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port,()=>console.log(`Process started at port ${port}`));
}
bootstrap();
