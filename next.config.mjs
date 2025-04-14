/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3moma7wl9.ufs.sh',
        pathname: '/f/**',
      },
    ],
  },
};



export default nextConfig;
