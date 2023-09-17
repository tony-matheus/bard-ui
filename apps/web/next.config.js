/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects() {
    return [
      {
        source: '/components',
        destination: '/components/button',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
