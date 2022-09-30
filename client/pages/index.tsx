import type {NextPage} from "next";
import Search from "../components/search/Search";
import Info from "../components/info/Info";
import MapContext from "../components/map/mapContext";
import React from "react";
import Overlay from "ol/Overlay";
import {useHanRiverInfo} from "../api/info";
import styled, {keyframes} from "styled-components";

const locatainData = [{
    name: "뚝섬",
    position: [1202.5006305099564, 491.5764799331531]
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
    position: [1233.3108189961722, 433.73792151037173]
},
//     {
//     name: "여의도",
//     position: [789.4961078458748, 461.9891656283356]
// },
]

const Home: NextPage = () => {
    const {map} = React.useContext(MapContext);
    const {isError, isLoading, data: hanRiverData} = useHanRiverInfo("")


    React.useEffect(() => {
        if (map && hanRiverData) {
            locatainData.forEach((data) => {

                const textTag = document.createElement("div")
                textTag.innerText = data.name
                textTag.className = "label"

                const pulseTag = document.createElement("div")
                pulseTag.className = `pulse ${hanRiverData[data.name].congestionMessage}`
                pulseTag.appendChild(textTag)


                // const textMarker = new Overlay({
                //     position: data.position,
                //     element: textTag,
                // });
                const pulseMarker = new Overlay({
                    position: [data.position[0], data.position[1]],
                    element: pulseTag,
                });

                // map.addOverlay(textMarker)
                map.addOverlay(pulseMarker)

            })
        }
    }, [map, hanRiverData])

    return (
        <Wrapper>
            <div id="map"
                 style={{width: "100vw", height: "100vh", position: "fixed", top: "0", left: "0"}}>
            </div>
            <div style={{display: "flex", flexDirection: "column", width: "30vw", height: "100vh", float: "right"}}>
                <Search/>
                <div style={{marginTop: "30px"}}/>
                <Info/>
            </div>
        </Wrapper>

    );
};

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.1, 0.1);
    opacity: 0.0;
  }

  50% {
    opacity: 1.0;

  }
  100% {
    transform: scale(1.2, 1.2);
    opacity: 0;
  }
`


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  .pulse {
    border-radius: 50%;
    height: 14px;
    width: 14px;
    position: absolute;
    left: 80%;
    top: 50%;
    margin: 11px 0px 0px -12px;
    transform: rotateX(55deg);
    z-index: -2;

    :after {
      content: "";
      border-radius: 50%;
      height: 40px;
      width: 40px;
      position: absolute;
      margin: -13px 0 0 -13px;
      animation: ${pulseAnimation} 1s ease-out;
      animation-iteration-count: infinite;
      opacity: 0.0;
      animation-delay: 1.1s;
    }
  }

  .여유 {
    background: rgba(0, 255, 0, 0.4);

    :after {
      box-shadow: 0 0 1px 2px green;
    }
  }

  .보통 {
    background: rgba(0, 0, 255, 0.4);

    :after {
      box-shadow: 0 0 1px 2px blue;
    }
  }

  .혼잡 {
    background: rgba(255, 0, 0, 0.4);

    :after {
      box-shadow: 0 0 1px 2px red;
    }
  }

  .label {
    position: absolute;
    top: -25px;
    left: -8px;
    color: #111111;
    font-weight: bold;
    white-space: nowrap;
  }
`


export default Home;
