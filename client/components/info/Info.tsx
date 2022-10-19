import React from "react";
import styled from "styled-components";
import {useMapInfoStore} from "../../stores/mapInfo";
import {useModal} from "../../stores/modal";

const Info = () => {
    const {info: hanRiverData,} = useMapInfoStore()
    const [dayWeather, setDayWeahter] = React.useState({});
    const {setIsClose} = useModal()

    return (
        <Wrapper>
            <>
                {/*{ hanRiverData.congestion.장소혼잡도 !== "여유" || hanRiverData.liveWeather.강수형태 === "비" ? <>한강각이 안나와요 😞</> : <>한강각 😉</>  }*/}
                <Card>
                    <div className="title widthClose">
                        <div>혼잡도</div>
                        <button onClick={setIsClose}>x</button>
                    </div>
                    <div className="info">
                        {hanRiverData.congestion.장소혼잡도메시지.split(".")[0]} <br/>
                        {hanRiverData.congestion.장소혼잡도메시지.split(".")[1]}
                    </div>
                </Card>
                <Card>
                    <div className="title">
                        실시간 날씨
                    </div>
                    <div className="info">
                        <WeahterCard>
                            {hanRiverData && hanRiverData.dayWeather.slice(2, 3).map((day: any) => (
                                <div key={day.예보시간} className={"wrapper big"}>
                                        <span
                                            className="icon_big">{day.하늘상태 === "흐림" && day.강수량 === null && "☁️"}</span>
                                    <span className="icon_big">{day.하늘상태 === "구름많음" && "☁️️"}</span>
                                    <span className="icon_big">
                   {day.강수량 !== null && day.하늘상태 === "흐림" && "🌧"}
                 </span>
                                    <div><span>기온 <b>{hanRiverData.liveWeather.기온}°</b></span> {" "} | {" "}
                                        <span>체감온도 <b>{hanRiverData.liveWeather.체감온도}°</b></span></div>
                                    <div>
                                        <span>일출시각 <b>{hanRiverData.liveWeather.일출시각}</b></span> {" "} | {" "}
                                        <span>일몰시각 <b>{hanRiverData.liveWeather.일몰시각}</b></span>
                                    </div>
                                    <br/>
                                    <div className="spaceBetween">
                                        <span>최저온도 <b>{hanRiverData.liveWeather.최저온도}°</b></span> |
                                        <span>최고온도 <b>{hanRiverData.liveWeather.최고온도}°</b></span> |
                                        <span>미세먼지 <b>{hanRiverData.liveWeather['미세먼지지표(10)']}</b></span> |
                                        <span>초미세먼지 <b>{hanRiverData.liveWeather['초미세먼지지표(25)']}</b></span>
                                    </div>
                                    <br/>
                                    <div
                                        style={{fontWeight: 500}}> ☔️ {hanRiverData.liveWeather.강수관련메시지.split(".")[0]}</div>
                                    {hanRiverData.liveWeather.강수관련메시지.split(".")[1] &&
                                        <>
                                            <br/>
                                            <div> {hanRiverData.liveWeather.강수관련메시지.split(".")[1]} </div>
                                        </>
                                    }
                                </div>
                            ))}
                        </WeahterCard>


                        {/*<div> ☀️️ {hanRiverData.liveWeather.자외선메시지}</div>*/}
                    </div>
                </Card>
                <Card>
                    <div className="title">
                        오늘의 날씨
                    </div>
                    <WeahterCard>
                        {hanRiverData && hanRiverData.dayWeather.slice(2, 7).map((day: any) => (
                            <div key={day.예보시간} className={"wrapper"}>
                                <span className="icon">{day.하늘상태 === "흐림" && day.강수량 === null && "☁️"}</span>
                                <span className="icon">{day.하늘상태 === "구름많음" && "☁️️"}</span>
                                <span className="icon">
                   {day.강수량 !== null && day.하늘상태 === "흐림" && "🌧"}
                 </span>
                                <span className="icon">
                   {day.하늘상태 === "맑음" && "☀️"}
                 </span>
                                <span>기온 <b>{day.기온}°</b></span>
                                <span><b>{day.예보시간.toString().slice(8, -2)}:00</b></span>
                            </div>
                        ))}
                    </WeahterCard>
                </Card>
                <Card>
                    <div className="title">
                        교통 상황
                    </div>
                    <div className="info">
                        {hanRiverData.roadTraffic.도로소통평균현황메시지.split(".")[0]}
                        {hanRiverData.roadTraffic.도로소통평균현황메시지.split(".")[1] &&
                            <>
                                <br/>
                                <div> {hanRiverData.roadTraffic.도로소통평균현황메시지.split(".")[1]} </div>
                            </>
                        }
                        <br/>
                        주로 <b>{hanRiverData.roadTraffic.전체도로소통평균현황}</b>하고
                        {hanRiverData.roadTraffic.전체도로소통평균현황 === "서행" ? "있고" : " "}
                        평균 속도는 <b>{hanRiverData.roadTraffic.전체도로소통평균속도}</b>km 에요
                    </div>
                </Card>
            </>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  padding: 0 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;

  .title {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 4px;
    line-height: 25px;
  }

  .widthClose {
    display: flex;
    justify-content: space-between;

    button {
      background: none;
      border: 0;
      cursor: pointer;
    }
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
  text-align: center;
  width: 100%;

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    //height: 00px;
    border-radius: 10px;
    border: 1px solid #25527a;
    padding: 5px;

    :not(:last-child) {
      margin-right: 5px;
    }

    &.big {
      padding: 10px 10px 20px 10px;
      border: 2px solid #25527a;

    }
  }

  .icon {
    font-size: 30px;
  }

  .icon_big {
    font-size: 50px;
  }

  .spaceBetween {
    display: flex;
    justify-content: space-between;
  }


  //justify-content: center;
`;


export default Info;


