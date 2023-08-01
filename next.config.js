/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.imagin,.studio'],
  },
  typescript: {
    igmoreBuildErrors: true,
  },
};

module.exports = nextConfig;
