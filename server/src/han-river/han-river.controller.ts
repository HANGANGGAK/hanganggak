import { Controller, Get, Param } from '@nestjs/common';
import { HanRiverService } from './han-river.service';

@Controller('han-river')
export class HanRiverController {
  constructor(private riverSpotService: HanRiverService) {}

  @Get()
  getHanRiverSummary(): object {
    return this.riverSpotService.getHanRiverSummary();
  }

  @Get(':place')
  getHanRiverData(@Param() params): object {
    return this.riverSpotService.getHanRiverData(params.place);
  }
}
