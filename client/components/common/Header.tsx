import styled from "styled-components";
import Image from "next/image";
import Logo from "../../public/logo2.svg";
import React from "react";
import Link from "next/link"
import {useQuery} from "react-query";
import { useRouter} from "next/router";

export const Header = () => {
  const router = useRouter()
  const { data: search } = useQuery<string>('search',() => '', {
    staleTime: Infinity,
  });

  const handleClick = () => {

    router.push("/")
  }

    return (
      <Wrapper>
        <Link href="/">
          <a>
            <Image src={Logo} alt="한강각 로고" width={200} height={50} />
          </a>
        </Link>
      </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  height: 60px;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  
  .logo {
    width: 150px;
    height: 50px;
  }
`;
