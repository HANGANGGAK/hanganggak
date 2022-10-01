// ./map/map.js
import React, {useEffect, useState} from "react";
import MapContext from "./mapContext";
import "ol/ol.css";
import {Map as OlMap, View} from "ol";
import Projection from 'ol/proj/Projection';
import ImageLayer from "ol/layer/Image";
import Static from 'ol/source/ImageStatic';
import {getCenter} from "ol/extent";

const Map = ({children}: { children: React.ReactNode }) => {
    const [mapObj, setMapObj] = useState<{ map?: OlMap }>({map: undefined});
    const extent = [0, 0, 1920, 1080];


    useEffect(() => {
        const projection = new Projection({
            code: 'xkcd-image',
            units: 'pixels',
            extent: extent,
        });
        const map = new OlMap({
            layers: [
                new ImageLayer({
                    source: new Static({
                        attributions: '서울 지도 이미지',
                        url: '../../map.png',
                        projection: projection,
                        imageExtent: extent,
                    }),
                }),
            ],
            target: 'map',
            view: new View({
                projection: projection,
                center: getCenter(extent),
                zoom: 2,
                maxZoom: 8,
            }),
        });


        setMapObj({map});

        return () => map.setTarget(undefined);
    }, []);

    // ✨ MapContext.Provider에 객체 저장
    return <MapContext.Provider value={mapObj}>{children}</MapContext.Provider>;
};

export default Map;