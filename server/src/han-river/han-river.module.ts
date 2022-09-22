import { Module } from '@nestjs/common';
import { HanRiverController } from './han-river.controller';
import { HanRiverService } from './han-river.service';

@Module({
  controllers: [HanRiverController],
  providers: [HanRiverService],
})
export class HanRiverModule {}
