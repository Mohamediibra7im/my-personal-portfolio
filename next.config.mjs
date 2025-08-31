/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "img.atcoder.jp",
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
      {
        protocol: 'https',
        hostname: 'd3moma7wl9.ufs.sh',
        pathname: '/f/**',
      },
    ],
  },
};

export default nextConfig;
