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
  async getDataInJson(place) {
    const apiUrl = `${process.env.BASE_URL}/${process.env.AUTH_KEY}/xml/citydata/1/5/${place}한강공원`;
    const xmlResult = await axios.get(encodeURI(apiUrl));

    return convert.xml2json(xmlResult.data, {
      compact: true,
      spaces: 4,
    });
  }

  async filterSummaryData(jsonResult) {
    const result = {};
    for (let i = 0; i < jsonResult.length; i++) {
      const cityData = await JSON.parse(jsonResult[i].value)[
        'SeoulRtd.citydata'
      ]['CITYDATA'];
      const placeName = cityData['AREA_NM']['_text'];
      const congestionMessage =
        cityData['LIVE_PPLTN_STTS']['LIVE_PPLTN_STTS']['AREA_CONGEST_LVL'][
          '_text'
        ];
      const liveTemp =
        cityData['WEATHER_STTS']['WEATHER_STTS']['TEMP']['_text'];
      const sunsetTime =
        cityData['WEATHER_STTS']['WEATHER_STTS']['SUNSET']['_text'];
      const keyName = placeName.slice(0, 2);

      result[keyName] = { placeName, congestionMessage, liveTemp, sunsetTime };
    }

    return result;
  }

  async filterData(jsonResult) {
    const result = {};
    for (let i = 0; i < jsonResult.length; i++) {
      const dataStatus = JSON.parse(jsonResult[i].value)['SeoulRtd.citydata'][
        'RESULT'
      ]['RESULT.MESSAGE']['_text'];
      const cityData = JSON.parse(jsonResult[i].value)['SeoulRtd.citydata'][
        'CITYDATA'
      ];
      const placeName = cityData['AREA_NM']['_text'];
      const congestionRawData = cityData['LIVE_PPLTN_STTS']['LIVE_PPLTN_STTS'];
      const roadTrafficRawData = cityData['ROAD_TRAFFIC_STTS']['AVG_ROAD_DATA'];
      const weatherRawData = cityData['WEATHER_STTS']['WEATHER_STTS'];
      const keyName = placeName.slice(0, 2);

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

      result[keyName] = {
        dataStatus,
        placeName,
        congestion,
        roadTraffic,
        liveWeather,
        dayWeather,
      };
    }
    return result;
  }

  async getHanRiverSummary(): Promise<object> {
    const hanRiverList = ['뚝섬', '망원', '반포', '이촌', '잠실'];

    const reqToSeoul = async (arr) => {
      if (!arr.length) return [];

      return await Promise.allSettled(
        arr.map(async (value) => {
          try {
            return await this.getDataInJson(value);
          } catch (err) {
            throw value;
          }
        }),
      ).then(async (jsonResult: any) => {
        const succeed = jsonResult.filter((el) => el.status === 'fulfilled');
        const failed = jsonResult.filter((el) => el.status === 'rejected');

        return [...succeed, ...(await reqToSeoul(failed))];
      });
    };

    return await this.filterData(await reqToSeoul(hanRiverList));
  }

  async getHanRiverData(place): Promise<object> {
    const result = await this.getDataInJson(place);

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
