import { Expose } from 'class-transformer';

export class roadTrafficResponse {
  @Expose({ name: 'ROAD_MSG' })
  '도로소통평균현황메시지': string;

  @Expose({ name: 'ROAD_TRAFFIC_IDX' })
  '전체도로소통평균현황': string;

  @Expose({ name: 'ROAD_TRFFIC_TIME' })
  '도로소통평균현황업데이트시간': string;

  @Expose({ name: 'ROAD_TRAFFIC_SPD' })
  '전체도로소통평균속도': number;
}
