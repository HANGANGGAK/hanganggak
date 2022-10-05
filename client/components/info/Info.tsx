import React, {ChangeEvent, useEffect, useState} from "react";
import {useHanRiverInfo} from "../../service/info";
import {useQuery} from "react-query";
import styled from "styled-components";

const Info = () => {
  const { data: search } = useQuery<string>('search',() => '', {
    staleTime: Infinity,
  });
  const {isError, isLoading, data: hanRiverData} = useHanRiverInfo(search)

  useEffect(() => {

  }, [search])

  return (
    <div>
      {isLoading && <>로딩 중 입니다.</>}
      {isError && <>에러가 발생했습니다.</>}
      {search && hanRiverData ?
        <>
        <CongestionCard>
          <div className={hanRiverData.congestion.장소혼잡도}>
          </div>
          <> {hanRiverData.congestion.장소혼잡도메시지} </>
          <br />
          { hanRiverData.congestion.장소혼잡도 !== "여유" || hanRiverData.liveWeather.강수형태 === "비" ? <>한강각이 안나와요 😞</> : <>한강각 😉</>  }
        </CongestionCard>
        {/*<DayWeatherCard>*/}
        {/*  <h2> 날씨</h2>*/}
        {/*  <h3>Cloudy<span>Wind 10km/h <span className="dot">•</span> Precip 0%</span></h3>*/}
        {/*  <h1>23°</h1>*/}
        {/*  <div className="sky">*/}
        {/*    <div className="sun"></div>*/}
        {/*    <div className="cloud">*/}
        {/*      <div className="circle-small"></div>*/}
        {/*      <div className="circle-tall"></div>*/}
        {/*      <div className="circle-medium"></div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <table>*/}
        {/*    <tr>*/}
        {/*      <td>TUE</td>*/}
        {/*      <td>WED</td>*/}
        {/*      <td>THU</td>*/}
        {/*      <td>FRI</td>*/}
        {/*      <td>SAT</td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*      <td>30°</td>*/}
        {/*      <td>34°</td>*/}
        {/*      <td>36°</td>*/}
        {/*      <td>34°</td>*/}
        {/*      <td>37°</td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*      <td>17°</td>*/}
        {/*      <td>22°</td>*/}
        {/*      <td>19°</td>*/}
        {/*      <td>23°</td>*/}
        {/*      <td>19°</td>*/}
        {/*    </tr>*/}
        {/*  </table>*/}
        {/*</DayWeatherCard>*/}
        </>
        :
        <div>none</div>
      }
    </div>
  )
}

const CongestionCard = styled.div`
  display: flex;
  flex-direction: column;
  
  div {
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background-color: red;
    
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
  }
  
`;

const DayWeatherCard = styled.div`
    margin: 0 auto;
    margin-top: 5%;
    padding: 5px 30px;
    width: 290px;
    height: 470px;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, .2);
    -webkit-animation: open 2s cubic-bezier(.39, 0, .38, 1);

  @-webkit-keyframes open {
    from {
      padding: 0 30px;
      height: 0;
    }
    to {
      height: 470px;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    position: relative;
  }

  h1 {
    float: right;
    color: #666;
    font-weight: 300;
    font-size: 6.59375em;
    line-height: .2em;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .2s;
  }

  h2 {
    font-weight: 300;
    font-size: 2.25em;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1);
  }

  h3 {
    float: left;
    margin-right: 33px;
    color: #777;
    font-weight: 400;
    font-size: 1em;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .1s;
  }

  span {
    margin-left: 24px;
    color: #999;
    font-weight: 300;
  }

  span span {
    margin-left: 0;
  }

  .dot {
    font-size: .9em;
  }

  .sky {
    position: relative;
    margin-top: 108px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #03A9F4;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .2s;
  }

  .sun {
    position: relative;
    top: -3px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #FFEB3B;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .5s;
  }

  .cloud {
    position: absolute;
    top: 60px;
    left: 30px;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .7s;
  }

  .cloud:before,
  .cloud:after {
    position: absolute;
    display: block;
    content: "";
  }

  .cloud:before {
    margin-left: -10px;
    width: 51px;
    height: 18px;
    background: #fff;
  }

  .cloud:after {
    position: absolute;
    top: -10px;
    left: -22px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 50px -6px 0 6px #fff, 25px -19px 0 10px #fff;
  }

  table {
    position: relative;
    top: 10px;
    width: 100%;
    text-align: center;
  }

  tr:nth-child(1) td:nth-child(1),
  tr:nth-child(1) td:nth-child(2),
  tr:nth-child(1) td:nth-child(3),
  tr:nth-child(1) td:nth-child(4),
  tr:nth-child(1) td:nth-child(5) {
    padding-bottom: 32px;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .7s;
  }

  tr:nth-child(2) td:nth-child(1),
  tr:nth-child(2) td:nth-child(2),
  tr:nth-child(2) td:nth-child(3),
  tr:nth-child(2) td:nth-child(4),
  tr:nth-child(2) td:nth-child(5) {
    padding-bottom: 7px;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .9s;
  }

  tr:nth-child(3) td:nth-child(1),
  tr:nth-child(3) td:nth-child(2),
  tr:nth-child(3) td:nth-child(3),
  tr:nth-child(3) td:nth-child(4),
  tr:nth-child(3) td:nth-child(5) {
    padding-bottom: 7px;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .9s;
  }

  tr:nth-child(2),
  tr:nth-child(3) {
    font-size: .9em;
  }

  tr:nth-child(3) {
    color: #999;
  }

  @-webkit-keyframes up {
    0% {
      opacity: 0;
      -webkit-transform: translateY(15px);
    }
    50% {
      opacity: 0;
      -webkit-transform: translateY(15px);
    }
    99% {
      -webkit-animation-play-state: paused;
    }
    100% {
      opacity: 1;
    }
  }
`;



export default Info;


