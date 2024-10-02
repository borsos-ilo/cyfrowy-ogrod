import { withAtlasConfig } from "@wpengine/atlas-next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['borsosilona.wpenginepowered.com'],
  },
};

export default withAtlasConfig(nextConfig);