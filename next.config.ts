import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // A production build must not overwrite resources served by next dev.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
}

export default nextConfig
