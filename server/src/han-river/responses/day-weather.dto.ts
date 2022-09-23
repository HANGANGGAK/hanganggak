import { Expose } from 'class-transformer';

export class dayWeatherResponse {
  @Expose({ name: 'FCST_DT' })
  '예보시간': number;

  @Expose({ name: 'TEMP' })
  '기온': number;

  @Expose({ name: 'PRECIPITATION' })
  '강수량': number;

  @Expose({ name: 'PRECPT_TYPE' })
  '강수형태': string;

  @Expose({ name: 'RAIN_CHANCE' })
  '강수확률': number;

  @Expose({ name: 'SKY_STTS' })
  '하늘상태': string;
}
