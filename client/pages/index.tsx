import type {NextPage} from "next";
import Search from "../components/search/Search";
import Info from "../components/info/Info";
import MapContext from "../components/map/mapContext";
import React from "react";
import Overlay from "ol/Overlay";

const locatainData = [{
    name: "뚝섬",
    position: [1202.5006305099564, 451.5764799331531]
}, {
    name: "망원",
    position: [692.3623600395065, 536.6586097266725]
}, {
    name: "반포",
    position: [993.5182717037145, 386.47984955370583],
}, {
    name: "이촌",
    position: [886.9668608547381, 395.89365001267686]
}, {
    name: "잠실",
    position: [1233.3108189961722, 413.73792151037173]
}, {
    name: "여의도",
    position: [789.4961078458748, 461.9891656283356]
},]

const Home: NextPage = () => {
    const {map} = React.useContext(MapContext);

    React.useEffect(() => {
        if (map) {
            locatainData.forEach((data) => {
                const tag = document.createElement("div")
                tag.innerText = data.name
                const marker = new Overlay({
                    position: data.position,
                    element: tag,
                });
                map.addOverlay(marker)
            })
        }
    }, [map])

    return (
        <div style={{width: "100vw", height: "100vh"}}>
            <div id="map"
                 style={{width: "100vw", height: "100vh", position: "fixed", top: "0", left: "0"}}>
            </div>
            <div style={{display: "flex", flexDirection: "column", width: "30vw", height: "100vh", float: "right"}}>
                <Search/>
                <div style={{marginTop: "30px"}}/>
                <Info/>
            </div>
            <div>test</div>
        </div>

    );
};

export default Home;
