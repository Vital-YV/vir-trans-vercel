import type { MetadataRoute } from 'next'
import { isProduction, siteUrl } from './site'

const publicPaths = ['/', '/service', '/forClients', '/etrn', '/vacancy']

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isProduction) return []

  return publicPaths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }))
}
