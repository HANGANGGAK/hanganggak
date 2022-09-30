import React, {ChangeEvent, useEffect, useState} from "react";
import {useHanRiverInfo} from "../../api/info";
import {useQuery} from "react-query";

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
      {hanRiverData? <>{hanRiverData.congestion.장소혼잡도메시지}</> : <div>none</div>}
    </div>
  )
}

export default Info;