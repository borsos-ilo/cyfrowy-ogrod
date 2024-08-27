import { withAtlasConfig } from "@wpengine/atlas-next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/new-page',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=3600',
          }
        ],
      },
    ]
  },
};

export default withAtlasConfig(nextConfig);