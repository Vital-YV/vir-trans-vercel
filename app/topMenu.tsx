"use client"
import { usePathname } from 'next/navigation'
import SiteNavigation from './SiteNavigation'
export default function TopMenu() {
  const pathname = usePathname()
  if (pathname === '/' || pathname === '/team' || pathname.startsWith('/top-secret') || pathname.startsWith('/bonus-review/')) return null
  return <header className="relative z-50 border-b border-black/10 bg-brand-background"><SiteNavigation /></header>
}
