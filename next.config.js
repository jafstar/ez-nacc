/** @type {import('next').NextConfig} */

const contentSlugs = ["stories", "team"];

const rewriteList = contentSlugs
  .map((itm) => {
    return [
      {
        source: `/preview/${itm}`,
        destination: `/content/${itm}`,
      },
      {
        source: `/preview/${itm}/:slug`,
        destination: `/content/${itm}/:slug`,
      },
      {
        source: `/${itm}`,
        destination: `/content/${itm}`,
      },
      {
        source: `/${itm}/:slug`,
        destination: `/content/${itm}/:slug`,
      },
    ];
  })
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
