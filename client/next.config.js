/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        destination: `${process.env.API_SERVER_URL}`,
        source: "/:path*"
      },
    ];
  },
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
};
