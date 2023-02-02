/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://my-local-api-shc4.vercel.app/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
