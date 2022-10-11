import {useRouter} from "next/router";
import styled from "styled-components";
import Info from "../components/info/Info";
import {HeadMeta} from "../components/common/HeadMeta";
import React from "react";

export default function Detail()  {
  const router = useRouter()
  const { search } = router.query;

  console.log("Search", router.query);

  return (
    <DataWrapper>
      <HeadMeta title={search} />
      <Info query={search} />
    </DataWrapper>
  )
}

const DataWrapper = styled.div`
    width: 100vw;
    height: 100%;
    padding-bottom: 20px;
  //  margin-top: 50vh ;
  //background-color: white;
`;

const CommercialWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #d2d2d2;
`;

