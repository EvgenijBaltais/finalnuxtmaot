/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  devIndicators: {
    buildActivity: false
  }
}


module.exports = nextConfig
