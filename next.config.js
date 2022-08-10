/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,

  experimental: {
    images: {
      unoptimized: true,
    },
  }
}


module.exports = nextConfig
