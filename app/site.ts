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

export const consentRobots: Metadata['robots'] = isProduction
  ? { index: false, follow: true }
  : indexingRobots

const socialImage = {
  url: '/brand/vir-trans-og.png',
  width: 1200,
  height: 630,
  alt: 'ВИР-ТРАНС — Ваш груз — в центре внимания. Оранжевая лампа освещает деревянный ящик.',
}
const socialPaths = new Set(['/', '/service', '/forClients', '/vacancy', '/etrn'])

export function publicMetadata({ title, description, path }: PublicMetadata): Metadata {
  const hasSocialImage = socialPaths.has(path)
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
      ...(hasSocialImage ? { images: [socialImage] } : {}),
    },
    ...(hasSocialImage ? {
      twitter: {
        card: 'summary_large_image' as const,
        title,
        description,
        images: [{ url: socialImage.url, alt: socialImage.alt }],
      },
    } : {}),
  }
}
