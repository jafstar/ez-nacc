/** @type {import('next').NextConfig} */

// Register every content model slug here.
// Each entry generates four rewrite rules:
//   /:type              → list page
//   /:type/:path*       → detail page (multi-segment slugs supported)
//   /preview/:type      → list page (preview/draft mode)
//   /preview/:type/:path* → detail page (preview/draft mode)
const contentSlugs = ["stories", "team"];

const rewriteList = contentSlugs
  .map((itm) => [
    {
      source: `/preview/${itm}`,
      destination: `/content/${itm}`,
    },
    {
      source: `/preview/${itm}/:path*`,
      destination: `/content/${itm}/:path*`,
    },
    {
      source: `/${itm}`,
      destination: `/content/${itm}`,
    },
    {
      source: `/${itm}/:path*`,
      destination: `/content/${itm}/:path*`,
    },
  ])
  .flat();

const nextConfig = {
  reactStrictMode: true,
  // concurrentFeatures: true,
  // experimental: { appDir: true },
  async rewrites() {
    return [...rewriteList];
  },
  publicRuntimeConfig: {
    PUBLIC_URL: "http://localhost:3000",
  },
  images: {
    domains: ["localhost", "dummyimage.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      // {
      //   protocol: "https",
      //   hostname: "dummyimage.com",
      //   port: "",
      //   pathname: "/**",
      // },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "x-custom-header",
            value: "my custom header value",
          },
          {
            key: "x-another-custom-header",
            value: "my other custom header value",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
