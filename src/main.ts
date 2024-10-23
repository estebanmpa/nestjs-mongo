import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassValidatorPipe } from './common/pipes/class-validator.pipe';
import { ConfigService } from '@nestjs/config';
import { ConfigurationEnum } from './common/configuration/configuration.enum';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get(ConfigurationEnum.LISTEN_PORT) ?? 3000;
  app.setGlobalPrefix("/api")
  app.useGlobalPipes(ClassValidatorPipe)
  app.useBodyParser('json', { limit: '10mb' });
  await app.listen(port);
}
bootstrap();
