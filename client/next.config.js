/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: {
            displayName: true,
            ssr: true,
            fileName: true,
            cssProp: true,
            pure: true,
        },
    },
}

module.exports = nextConfig;
