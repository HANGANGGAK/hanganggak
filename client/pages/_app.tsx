import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import React from "react";
import {ReactQueryDevtools} from "react-query/devtools";
import {HeadMeta} from "../components/common/HeadMeta";
import {useHanRiverInfo} from "../service/info";
import Detail from "./[search]";

const Map = dynamic(() => import("../components/map"), { ssr: false });

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <QueryClientProvider client={queryClient}>
        <HeadMeta />
        {/*<ReactQueryDevtools initialIsOpen={true}/>*/}
        <Map>
          <Component {...pageProps} />
        </Map>
        <Detail />
      </QueryClientProvider>
  );
}

export default MyApp;
