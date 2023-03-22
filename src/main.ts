import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true
    }),
  );
  app.enableVersioning({
    type: VersioningType.URI,
  });
  const config = new DocumentBuilder()
  .setTitle('Chat Application')
  .setDescription('Document for REST-API NestJs Chat Application')
  .setVersion('v1')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs-api', app, document);
  await app.listen(port);
  return port
}
bootstrap().then((port: number) => {
  Logger.log(`App is listening on port ${port}`);
});
