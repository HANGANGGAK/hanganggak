import { Expose } from 'class-transformer';

export class liveWeatherResponse {
  @Expose({ name: 'TEMP' })
  '기온': number;

  @Expose({ name: 'SENSIBLE_TEMP' })
  '체감온도': number;

  @Expose({ name: 'MAX_TEMP' })
  '최고온도': number;

  @Expose({ name: 'MIN_TEMP' })
  '최저온도': number;

  @Expose({ name: 'HUMIDITY' })
  '습도': number;

  @Expose({ name: 'WIND_SPD' })
  '풍속': number;

  @Expose({ name: 'PRECIPITATION' })
  '강수량': number;

  @Expose({ name: 'PRECPT_TYPE' })
  '강수형태': string;

  @Expose({ name: 'PCP_MSG' })
  '강수관련메시지': string;

  @Expose({ name: 'SUNRISE' })
  '일출시각': string;

  @Expose({ name: 'SUNSET' })
  '일몰시각': string;

  @Expose({ name: 'UV_INDEX_LVL' })
  '자외선지수단계': number;

  @Expose({ name: 'UV_INDEX' })
  '자외선지수': string;

  @Expose({ name: 'UV_MSG' })
  '자외선메시지': string;

  @Expose({ name: 'PM25_INDEX' })
  '초미세먼지지표(25)': string;

  @Expose({ name: 'PM25' })
  '초미세먼지농도(25)': number;

  @Expose({ name: 'PM10_INDEX' })
  '미세먼지지표(10)': string;

  @Expose({ name: 'PM10' })
  '미세먼지농도(25)': number;

  @Expose({ name: 'AIR_IDX' })
  '통합대기환경등급': string;

  @Expose({ name: 'AIR_IDX_MVL' })
  '통합대기환경지수': number;

  @Expose({ name: 'AIR_IDX_MAIN' })
  '통합대기환경지수결정물질': string;

  @Expose({ name: 'AIR_IDX_MSG' })
  '통합대기환경등급별메시지': string;

  @Expose({ name: 'WEATHER_TIME' })
  '날씨업데이트시간': string;
}
