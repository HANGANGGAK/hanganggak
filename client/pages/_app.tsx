import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import { HeadMeta } from "../components/common/HeadMeta";
import dynamic from "next/dynamic";
import Script from "next/script";

const Map = dynamic(() => import("../components/map"), { ssr: false });

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3899838752875465"
        crossOrigin="anonymous"
      />
      <HeadMeta />
      {/*<ReactQueryDevtools initialIsOpen={true}/>*/}
      <Map>
        <Component {...pageProps} />
      </Map>
    </QueryClientProvider>
  );
}

export default MyApp;
