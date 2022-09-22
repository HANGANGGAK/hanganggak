import { Injectable } from '@nestjs/common';
import axios from 'axios';
import convert from 'xml-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(
    process.env.NODE_ENV === 'production' ? '.prod.env' : '.dev.env',
  ),
});

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
    return JSON.parse(result)['SeoulRtd.citydata'];
  }
}
