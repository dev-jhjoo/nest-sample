import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Mail example')
    .setDescription('The mail API description')
    .setVersion('1.0')
    .addTag('mails')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger-api', app, document);

  await app.listen(process.env.MAIL_APP_PORT, () => {
    console.log('> mail server on port=' + process.env.MAIL_APP_PORT);
  });
}
bootstrap();
