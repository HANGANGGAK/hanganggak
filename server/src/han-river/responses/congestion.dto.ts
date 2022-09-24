import { Expose } from 'class-transformer';

export class congestionResponse {
  @Expose({ name: 'AREA_CONGEST_LVL' })
  '장소혼잡도': string;

  @Expose({ name: 'AREA_CONGEST_MSG' })
  '장소혼잡도메시지': string;

  @Expose({ name: 'AREA_PPLTN_MIN' })
  '최소인구수(명)': number;

  @Expose({ name: 'AREA_PPLTN_MAX' })
  '최대인구수(명)': number;

  @Expose({ name: 'MALE_PPLTN_RATE' })
  '남성비율': number;

  @Expose({ name: 'FEMALE_PPLTN_RATE' })
  '여성비율': number;

  @Expose({ name: 'PPLTN_RATE_0' })
  '10대이하비율': number;

  @Expose({ name: 'PPLTN_RATE_10' })
  '10대비율': number;

  @Expose({ name: 'PPLTN_RATE_20' })
  '20대비율': number;

  @Expose({ name: 'PPLTN_RATE_30' })
  '30대비율': number;

  @Expose({ name: 'PPLTN_RATE_40' })
  '40대비율': number;

  @Expose({ name: 'PPLTN_RATE_50' })
  '50대비율': number;

  @Expose({ name: 'PPLTN_RATE_60' })
  '60대비율': number;

  @Expose({ name: 'PPLTN_RATE_70' })
  '70대비율': number;

  @Expose({ name: 'PPLTN_TIME' })
  '실시간인구업데이트시간': string;
}
