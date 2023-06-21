/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/directory",
  images: {
    unoptimized: true
  },
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig
