
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Hckaton Jobs')
    .addBearerAuth()
    .setDescription(
      'Hackaton Pl-Master documentacion de API scrap de vacantes de empleo y apoyo a Talent Placement',
    )
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, document);
}