// ./map/map.js
import React, { useEffect, useState } from "react";
import MapContext from "./mapContext";
import "ol/ol.css";
import { Map as OlMap, View } from "ol";
import { defaults } from "ol/control";
import { fromLonLat, get as getProjection, ProjectionLike } from "ol/proj";
import { Tile } from "ol/layer";
import { OSM, XYZ } from "ol/source";

const Map = ({ children }: { children: React.ReactNode }) => {
  const [mapObj, setMapObj] = useState<{ map: OlMap } | {}>({});
  const po = getProjection("EPSG:3857") as ProjectionLike;

  useEffect(() => {
    const map = new OlMap({
      controls: defaults({ zoom: false, rotate: false }).extend([]),
      layers: [
        new Tile({
          source: new OSM()
        }),
        new Tile({
          visible: true,
          source: new XYZ({
            url: `https://api.vworld.kr/req/wmts/1.0.0/AA70B863-ECB8-3104-B1A3-3621E9FBF88F/Base/{z}/{y}/{x}.png`
          })
        })
      ],
      // 북위 37도 33분 06.6초, 동경 126도 59분 19.6초 37.715133. 126.734086  북위 37.5642135° 동경 127.0016985°
      target: "map",
      view: new View({
        center: fromLonLat([127.1216985, 37.5642135], po),
        zoom: 11
      })
    });

    setMapObj({ map });

    return () => map.setTarget(undefined);
  }, []);

  // ✨ MapContext.Provider에 객체 저장
  return <MapContext.Provider value={{ mapObj }}>{children}</MapContext.Provider>;
};

export default Map;