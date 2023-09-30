const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/components/button',
        permanent: true,
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)
