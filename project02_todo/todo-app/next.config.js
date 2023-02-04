/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://my-local-68b85ne91-ansari1120.vercel.app/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
