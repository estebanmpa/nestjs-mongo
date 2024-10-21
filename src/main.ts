import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassValidatorPipe } from './common/pipes/class-validator.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api")
  app.useGlobalPipes(ClassValidatorPipe)
  await app.listen(process.env.LISTEN_PORT ?? 3000);
}
bootstrap();
