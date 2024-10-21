import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Add this line to set the global prefix
  app.setGlobalPrefix('api');

  // If you need CORS, add this line as well
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
