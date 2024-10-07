import "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  images: {
    domains: ['primeidea.kashyappandya.com', 'https://primeidea.kashyappandya.com', 'https://primeidea.kashyappandya.com/wp-content/uploads'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://primeidea.kashyappandya.com/',
        port: '',
        pathname: 'https://primeidea.kashyappandya.com/**',
      }
    ]
  }
}
export default nextConfig
