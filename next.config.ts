import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Serve modern compressed image formats when the browser supports them
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
