import { Controller, Get, Param } from '@nestjs/common';
import { HanRiverService } from './han-river.service';

@Controller('han-river')
export class HanRiverController {
  constructor(private riverSpotService: HanRiverService) {}

  @Get(':place')
  getHanRiverData(@Param() params): any {
    return this.riverSpotService.getHanRiverData(params.place);
  }
}
