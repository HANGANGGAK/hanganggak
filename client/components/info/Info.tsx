import React, {ChangeEvent, useEffect, useState} from "react";
import {useHanRiverInfo} from "../../service/info";
import {useQuery} from "react-query";
import styled from "styled-components";

const Info = () => {
  const { data: search } = useQuery<string>('search',() => '', {
    staleTime: Infinity,
  });
  const {isError, isLoading, data: hanRiverData} = useHanRiverInfo(search)
  const [dayWeather, setDayWeahter] = React.useState({});

  return (
    <Wrapper>
      {isLoading && <>로딩 중 입니다.</>}
      {isError && <>에러가 발생했습니다.</>}
      {search && hanRiverData &&
        <>
          {/*{ hanRiverData.congestion.장소혼잡도 !== "여유" || hanRiverData.liveWeather.강수형태 === "비" ? <>한강각이 안나와요 😞</> : <>한강각 😉</>  }*/}
          <Card>
            <div className="title">
              혼잡도
            </div>
              <div className="info">
                {hanRiverData.congestion.장소혼잡도메시지.split(".")[0]} <br />
                {hanRiverData.congestion.장소혼잡도메시지.split(".")[1]}
              </div>
          </Card>
          <Card>
            <div className="title">
              실시간 날씨
            </div>
            <div className="info">
              <span>기온 <b>{hanRiverData.liveWeather.기온}</b></span> {" "} | {" "}
              <span>체감온도 <b>{hanRiverData.liveWeather.체감온도}</b></span>
              <br />
              <span>일출시각 <b>{hanRiverData.liveWeather.일출시각}</b></span> {" "} | {" "}
              <span>일몰시각 <b>{hanRiverData.liveWeather.일몰시각}</b></span>
              <div className="wrapper">
                <span>최저온도 <b>{hanRiverData.liveWeather.최저온도}</b></span> |
                <span>최고온도 <b>{hanRiverData.liveWeather.최고온도}</b></span> |
                <span>미세먼지 <b>{hanRiverData.liveWeather['미세먼지지표(10)']}</b></span> |
                <span>초미세먼지 <b>{hanRiverData.liveWeather['초미세먼지지표(25)']}</b></span>
              </div>
              <div style={{ marginTop:"5px"}}> ☔️ {hanRiverData.liveWeather.강수관련메시지.split(".")[0]}</div>
              {hanRiverData.liveWeather.강수관련메시지.split(".")[1] &&
                <>
                  <br />
                  <div> {hanRiverData.liveWeather.강수관련메시지.split(".")[1]} </div>
                </>
              }
                {/*<div> ☀️️ {hanRiverData.liveWeather.자외선메시지}</div>*/}
            </div>
          </Card>
          <Card>
            <div className="title">
                오늘의 날씨
            </div>
              <WeahterCard>
            {hanRiverData.dayWeather.slice(0, 5).map((day: any) => (
               <div key={day.예보시간} className={"wrapper"}>
                <span>기온 <b>{day.기온}</b></span>
                 {/*<span><b>{day.예보시간.split(0, 7)}</b></span>*/}

               </div>
            ))}
              </WeahterCard>

          </Card>
      </>
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  
  .title {
    font-size: 1rem;
    font-weight: 500;
  }
  
  .wrapper {
    display: flex;
    justify-content: space-between;
  }
  
  .center {
    text-align: center
  }
  
  .info {
    font-size: 0.875rem;
  }
  
  :not(:first-child) {
    margin-top: 10px;
  }
`;


const WeahterCard = styled.div`
  display: flex;
  justify-content: space-between;

  .wrapper {
    display: flex;
    flex-direction: column;
    //justify-content: ;
  }
  
  //justify-content: center;
`;





export default Info;


