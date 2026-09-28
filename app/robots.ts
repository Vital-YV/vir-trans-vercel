import type { MetadataRoute } from 'next'
import { isProduction, siteUrl } from './site'

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: new URL('/sitemap.xml', siteUrl).toString(),
  }
}
