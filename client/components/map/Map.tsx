// ./map/map.js
import React, {useEffect, useState} from "react";
import MapContext from "./mapContext";
import "ol/ol.css";
import {Map as OlMap, View} from "ol";
import Projection from 'ol/proj/Projection';
import ImageLayer from "ol/layer/Image";
import Static from 'ol/source/ImageStatic';
import {getCenter} from "ol/extent";
import {useHanRiverInfo} from "../../service/info";

const Map = ({children}: { children: React.ReactNode }) => {
    const {isError, isLoading, data: hanRiverData} = useHanRiverInfo("")
    const [mapObj, setMapObj] = useState<{ map?: OlMap; data?: any }>({map: undefined, data: undefined});
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


        setMapObj((prev) => ({...prev, map}));

        return () => map.setTarget(undefined);
    }, []);

    // ✨ MapContext.Provider에 객체 저장
    return <MapContext.Provider value={mapObj}>{children}</MapContext.Provider>;
};

export default React.memo(Map);