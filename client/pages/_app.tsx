import "../styles/globals.css";
import type {AppProps} from "next/app";
import dynamic from "next/dynamic";
import {QueryClient, QueryClientProvider} from "react-query";
import React from "react";
import {HeadMeta} from "../components/common/HeadMeta";

const Map = dynamic(() => import("../components/map"), {ssr: false});

const queryClient = new QueryClient()

function MyApp({Component, pageProps}: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <HeadMeta/>
            {/*<ReactQueryDevtools initialIsOpen={true}/>*/}
            <Map>
                <Component {...pageProps} />
            </Map>
        </QueryClientProvider>
    );
}

export default MyApp;
