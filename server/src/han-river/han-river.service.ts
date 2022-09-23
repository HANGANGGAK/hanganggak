import { Injectable } from '@nestjs/common';
import axios from 'axios';
import convert from 'xml-js';
import * as dotenv from 'dotenv';
import { plainToInstance } from 'class-transformer';
import { congestionResponse } from './responses/congestion.dto';
import { roadTrafficResponse } from './responses/road-traffic.dto';
import { liveWeatherResponse } from './responses/live-weather.dto';
import { dayWeatherResponse } from './responses/day-weather.dto';

dotenv.config();

@Injectable()
export class HanRiverService {
  async getHanRiverData(place): Promise<any> {
    const apiUrl = `${process.env.BASE_URL}/${process.env.AUTH_KEY}/xml/citydata/1/5/${place}한강공원`;

    const xmlResult = await axios({
      url: encodeURI(apiUrl),
      method: 'GET',
      headers: { 'Content-Type': 'Application/xml' },
    });

    const result = convert.xml2json(xmlResult.data, {
      compact: true,
      spaces: 4,
    });

    const dataStatus =
      JSON.parse(result)['SeoulRtd.citydata']['RESULT']['RESULT.MESSAGE'][
        '_text'
      ];
    const cityData = JSON.parse(result)['SeoulRtd.citydata']['CITYDATA'];
    const placeName = cityData['AREA_NM']['_text'];
    const congestionRawData = cityData['LIVE_PPLTN_STTS']['LIVE_PPLTN_STTS'];
    const roadTrafficRawData = cityData['ROAD_TRAFFIC_STTS']['AVG_ROAD_DATA'];
    const weatherRawData = cityData['WEATHER_STTS']['WEATHER_STTS'];

    const excludeTextKey = (obj) => {
      const keys = Object.keys(obj);

      const result = {};
      for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = obj[keys[i]]['_text'];
      }

      return result;
    };

    const congestion = plainToInstance(
      congestionResponse,
      excludeTextKey(congestionRawData),
      {
        excludeExtraneousValues: true,
        enableImplicitConversion: true,
      },
    );

    const roadTraffic = plainToInstance(
      roadTrafficResponse,
      excludeTextKey(roadTrafficRawData),
      {
        excludeExtraneousValues: true,
        enableImplicitConversion: true,
      },
    );

    const liveWeather = plainToInstance(
      liveWeatherResponse,
      excludeTextKey(weatherRawData),
      {
        excludeExtraneousValues: true,
        enableImplicitConversion: true,
      },
    );

    const dayWeather = weatherRawData['FCST24HOURS']['FCST24HOURS'].map(
      (el) => {
        return plainToInstance(dayWeatherResponse, excludeTextKey(el), {
          excludeExtraneousValues: true,
          enableImplicitConversion: true,
        });
      },
    );

    return {
      dataStatus,
      placeName,
      congestion,
      roadTraffic,
      liveWeather,
      dayWeather,
    };
  }
}
