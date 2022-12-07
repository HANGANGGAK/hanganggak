/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = withPlugins([withBundleAnalyzer, withImages], {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        destination: `${process.env.NEXT_PUBLIC_API_SERVER_URL}`,
        source: "/:path*",
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      // issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  swcMinify: true,
  distDir: "build",
  trailingSlash: true,
  assetPrefix: ".",
  images: {
    loader: "akamai",
    path: `.`,
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_SERVER_URL: process.env.NEXT_PUBLIC_API_SERVER_URL,
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
      cssProp: true,
      pure: true,
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
