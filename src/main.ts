import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Validation se necesita class-validator y sirve para cerrar el ingreso del formulario
  /*app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  )*/

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
