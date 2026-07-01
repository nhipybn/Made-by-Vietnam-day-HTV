/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: ['192.168.51.101:3000', 'localhost:3000']
  }
};

export default nextConfig;