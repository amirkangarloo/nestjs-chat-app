import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('NestJs Chat Application')
  .setDescription('API description')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs-api', app, document);
  await app.listen(port);
  return port
}
bootstrap().then((port: number) => {
  Logger.log(`App is listening on port ${port}`);
});
