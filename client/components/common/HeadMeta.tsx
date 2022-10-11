import Head from "next/head";
import Logo from  "../../public/logo.png"
import {useQuery} from "react-query";

interface IMetaType {
    title?: any,
    description?: string,
    url?: string,
}
export const HeadMeta = ({  title, description, url }: IMetaType) => {
  return (
        <Head>
            <title>{title === undefined ? "한강각" : `한강각 | ${title}`}</title>
            <meta
                name="description"
                content={description === "" ?
                    "한강각, 한강, 한강공원, 불꽃축제, 잠실, 뚝섬, 반포, 이촌, 여의도 한강공원, 한강간맥, 한강 날씨, 뚝섬유원지, 한강치맥" : description
                }
            />
            <link rel="canonical" href="http://hanganggak.site" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={title === undefined ? "한강각" : `한강각 | ${title}`} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || "http://hanganggak.site"} />
            <meta property="og:description" content={
              description === "" ?
                "한강각, 한강, 한강공원, 불꽃축제, 잠실, 뚝섬, 반포, 이촌, 여의도 한강공원, 한강간맥, 한강 날씨, 뚝섬유원지, 한강치맥" : description
              }
            />
            <meta property="og:site_name" content="한강각" />
            <meta property="og:image" content={"https://github.com/HANGANGGAK/hanganggak/blob/dev/client/public/logo.png?raw=true"} />
            <meta property="og:article:author" content="각스튜디오 || 한강각" />

            <meta name="twitter:card" content="한강각" />
            <meta name="twitter:title" content={title === undefined ? "한강각" : `한강각 | ${title}`} />
            <meta name="twitter:description" content={
              description === "" ?
                "한강각, 한강, 한강공원, 불꽃축제, 잠실, 뚝섬, 반포, 이촌, 여의도 한강공원, 한강간맥, 한강 날씨, 뚝섬유원지, 한강치맥" : description
              }
            />
            <meta name="twitter:image" content="https://github.com/HANGANGGAK/hanganggak/blob/dev/client/public/logo.png?raw=true" />
            <meta name="twitter:site" content="http://hanganggak.site" />
            <meta http-equiv="Copyright" content="hanganggak@gmail.com" />
            <meta name="naver-site-verification" content="5b045220e7c350ae41da983b04db4c5b033758df" />
        </Head>
    );
};

