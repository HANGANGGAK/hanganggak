import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import {QueryClient, QueryClientProvider} from "react-query";
import React from "react";

const Map = dynamic(() => import("../components/map"), { ssr: false });

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <QueryClientProvider client={queryClient}>
        <Map>
          <Component {...pageProps} />
        </Map>
      </QueryClientProvider>
  );
}

export default MyApp;
