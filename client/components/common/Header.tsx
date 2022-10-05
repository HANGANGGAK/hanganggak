import styled from "styled-components";
import Image from "next/image";
import Logo from "../../public/logo2.svg";
import React from "react";
import {HeadMeta} from "./HeadMeta";

export const Header = () => {
    return (
        <>
            <HeadMeta />
            <Wrapper>
                <Image src={Logo} alt="한강각 로고" width={200} height={50} />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  height: 60px;
  background-color: white;
  left: 0;
  top: 0;
  
  .logo {
    width: 150px;
    height: 50px;
  }
`;
