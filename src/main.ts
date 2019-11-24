import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<any>(AppModule);
  app.useStaticAssets('public');

  const options = new DocumentBuilder()
  .setTitle('Cursillo Nest API')
  .setDescription('CRUD de Usuarios')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
