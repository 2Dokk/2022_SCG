/** @type {import('next').NextConfig} */
const isprod = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
const path = require("path");
module.exports = {
  basePath: "/2022_SCG",
  images: {
    loader: "akamai",
    path: "/",
  },
  assertPrefix: isprod ? "https://2dokk.github.io/2022_SCG" : undefined,
  nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async rewrites() {
    console.log("Rewrites called");
    return [
      {
        source: "/api/:slug*",
        destination: `https://maps.googleapis.com/maps/api/place/:slug*`,
        basePath: false,
      },
    ];
  },
};
