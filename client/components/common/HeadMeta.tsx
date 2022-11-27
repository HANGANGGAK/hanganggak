import Head from "next/head";
import { useQuery } from "react-query";
import Script from "next/script";

interface IMetaType {
  // title: string | undefined,
  description?: string;
  url?: string;
}

export const HeadMeta = () => {
  return (
    <>
      <Head>
        <title>한강각</title>
        <meta
          name="description"
          content={`한강각, 한강, 한강공원, 불꽃축제, 잠실, 뚝섬, 반포, 이촌, 여의도 한강공원, 한강간맥, 한강 날씨, 뚝섬유원지, 한강치맥`}
        />
        <link rel="canonical" href="https://hanganggak.site" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={"한강각"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://hanganggak.site"} />
        <meta
          property="og:description"
          content="한강각, 한강, 한강공원, 불꽃축제, 잠실, 뚝섬, 반포, 이촌, 여의도 한강공원, 한강간맥, 한강 날씨, 뚝섬유원지, 한강치맥"
        />
        <meta property="og:site_name" content="한강각" />
        <meta
          property="og:image"
          content={
            "https://github.com/HANGANGGAK/hanganggak/blob/dev/client/public/logo.png?raw=true"
          }
        />
        <meta property="og:article:author" content="각스튜디오 || 한강각" />

        <meta name="twitter:card" content="한강각" />
        <meta name="twitter:title" content={"한강각"} />
        <meta
          name="twitter:description"
          content="한강각, 한강, 한강공원, 불꽃축제, 잠실, 뚝섬, 반포, 이촌, 여의도 한강공원, 한강간맥, 한강 날씨, 뚝섬유원지, 한강치맥"
        />
        <meta
          name="twitter:image"
          content="https://github.com/HANGANGGAK/hanganggak/blob/dev/client/public/logo.png?raw=true"
        />
        <meta name="twitter:site" content="https://hanganggak.site" />
        <meta httpEquiv="Copyright" content="hanganggak@gmail.com" />
        <meta
          name="naver-site-verification"
          content="5b045220e7c350ae41da983b04db4c5b033758df"
        />
      </Head>
      {/*<Script*/}
      {/*  async*/}
      {/*  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3899838752875465"*/}
      {/*  crossOrigin="anonymous"*/}
      {/*/>*/}
    </>
  );
};
