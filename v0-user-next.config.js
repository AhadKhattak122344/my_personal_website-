/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: './',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '', // Replace 'portfolio' with your repository name
  trailingSlash: true,
}

module.exports = nextConfig

