import type {NextPage} from "next";
import Search from "../components/search/Search";
import Info from "../components/info/Info";
import MapContext from "../components/map/mapContext";
import React from "react";
import Overlay from "ol/Overlay";
import {useHanRiverInfo} from "../service/info";
import styled, {keyframes} from "styled-components";
import Logo from "../public/logo2.svg"
import Image from "next/image";
import {Header} from "../components/common/Header"
import {useQuery, useQueryClient} from "react-query";
import {HeadMeta} from "../components/common/HeadMeta";

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
  const queryClient = useQueryClient();
  const {map} = React.useContext(MapContext);
  const {isError, isLoading, data: hanRiverData} = useHanRiverInfo("")
  const { data: search } = useQuery<string>('search',() => '', {
    staleTime: Infinity,
  });

    React.useEffect(() => {
        if (map && hanRiverData) {
            locatainData.forEach((data) => {

                const textTag = document.createElement("div")
                textTag.innerText = data.name
                textTag.className = "label &.selected"

                const pulseTag = document.createElement("div")
                pulseTag.className = `pulse ${hanRiverData[data.name].congestionMessage === "매우 붐빔" ? "매우붐빔" : hanRiverData[data.name].congestionMessage}`
                pulseTag.appendChild(textTag)


                // const textMarker = new Overlay({
                //     position: data.position,
                //     element: textTag,
                // });

              pulseTag.addEventListener('click', () => {
                queryClient.setQueryData("search", data.name)
              });

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
      <>
      {/*<HeadMeta title={search}/>*/}
        <Container>
            <Header />
            <MapWrapper id="map" />
            {/*<CommercialWrapper />*/}
            <DataWrapper>
              <Info/>
            </DataWrapper>
        </Container>
      </>

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


const Container = styled.div`
  width: 100vw;
  height: auto;
  padding-bottom: 30px;
  padding-top: 60px;

  .pulse {
    border-radius: 50%;
    height: 14px;
    width: 14px;
    position: absolute;
    left: 80%;
    top: 50%;
    margin: 11px 0px 0px -12px;
    //transform: rotateX(55deg);
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


  .붐빔 {
    background: #FF8040;

    :after {
      box-shadow: 0 0 1px 2px darkorange;
    }
  }
  
  .매우붐빔 {
    background: rgba(255, 0, 0, 0.4);

    :after {
      box-shadow: 0 0 1px 2px red;
    }
  }

  .label {
    position: absolute;
    top: -35px;
    left: -8px;
    color: #000;
    font-weight: bold;
    white-space: nowrap;

    background-color: #fff;
    border-radius: 10px;
    padding: 5px;
    border: 2px solid #25527a;
    
    :hover {
      background-color: #25527a;
      color: #fff
    }

    .selected {
      background-color: #25527a;
      color: #fff
    }
  }
`

const MapWrapper = styled.div`
    width: 100vw; 
    height: 40vh; 
    //position: fixed; 
    //margin-top: 60px;
`;

const DataWrapper = styled.div`
  margin-top: 10px;
    width: 100vw;
    height: 100%;
`;

const CommercialWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #d2d2d2;
`;

export default Home;
