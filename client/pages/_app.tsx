import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/map"), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  return <Map><Component {...pageProps} /></Map>;
}

export default MyApp;
