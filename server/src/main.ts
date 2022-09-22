import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import compression from 'compression';
import * as ip from 'ip';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(
    process.env.NODE_ENV === 'production' ? '.prod.env' : '.dev.env',
  ),
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PROTOCOL = 'http';
  const myIp = ip.address();
  const PORT = process.env.PORT;

  app.enableCors();
  app.use(compression());

  await app.listen(PORT);
  console.log(`Server running: ${PROTOCOL}://${myIp}:${PORT}`);
}
void bootstrap();
