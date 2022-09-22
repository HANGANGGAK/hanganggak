import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HanRiverModule } from './han-river/han-river.module';

@Module({
  imports: [HanRiverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
