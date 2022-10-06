import Head from "next/head";

interface IMetaType {
    title?: string,
    description?: string,
    url?: string,
    image?: string
}
export const HeadMeta = ({ title, description, url, image }: IMetaType) => {
    return (
        <Head>
            <title>{"한강각"}</title>
            <meta
                name="description"
                content={
                    "한강각" ||
                    "한강이 가고 싶을 때"
                }
            />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={"한강각"} />
            <meta property="og:type" content="website" />
            {/*<meta property="og:url" content={url || "https://jungleehabit.com"} /> */}
            {/*<meta property="og:image" content={image} />*/}
            <meta property="og:article:author" content="한강각" />
        </Head>
    );
};

