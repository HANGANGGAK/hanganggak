import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import * as ip from 'ip';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PROTOCOL = process.env.PROTOCOL;
  const myIp = ip.address();
  const PORT = process.env.PORT;

  app.enableCors();
  app.use(compression());
  app.use(
    rateLimit({
      windowMs: 10 * 60 * 1000,
      max: 50,
    }),
  );

  await app.listen(PORT);

  console.log(`HANGANGGAK Server running: ${PROTOCOL}://${myIp}:${PORT}`);
}
void bootstrap();
