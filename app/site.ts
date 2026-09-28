import type { Metadata } from 'next'

const fallbackSiteUrl = 'https://vir-trans.ru'

function getSiteUrl() {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl)
  } catch {
    return new URL(fallbackSiteUrl)
  }
}

export const siteUrl = getSiteUrl()
export const isProduction = process.env.VERCEL_ENV === 'production'

export const indexingRobots: Metadata['robots'] = isProduction
  ? { index: true, follow: true }
  : {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    }

type PublicMetadata = {
  title: string
  description: string
  path: string
}

export function publicMetadata({ title, description, path }: PublicMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: indexingRobots,
    openGraph: {
      title,
      description,
      url: path,
      siteName: 'Вир-Транс',
      locale: 'ru_RU',
      type: 'website',
    },
  }
}
