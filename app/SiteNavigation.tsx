'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import BrandLogo from './BrandLogo'
import Link from 'next/link'
import { InsideAccessLink } from './InsideAccess'
import CurrentTopic from './CurrentTopic'

export default function SiteNavigation({ hero = false }: { hero?: boolean }) {
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const toggle = useRef<HTMLButtonElement>(null)
  const panelHost = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1280px)')
    const close = () => setOpen(false)
    query.addEventListener('change', close)
    return () => query.removeEventListener('change', close)
  }, [])
  useEffect(() => {
    if (!open) return
    const outside = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false) }
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() } }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', escape)
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape) }
  }, [open])
  const items = (mobile: boolean) => {
    const link = mobile ? 'block rounded px-3 py-3 transition-colors hover:bg-black/5' : 'transition-colors hover:text-brand-accent'
    return <>
      <Link href="/" className={link} onClick={() => setOpen(false)}>Главная</Link>
      <Link href={pathname === '/' ? '#about' : '/#about'} className={link} onClick={() => setOpen(false)}>О компании</Link>
      <Link href="/forClients" className={link} onClick={() => setOpen(false)}>Клиентам</Link>
      <CurrentTopic placement="inline" panelHost={mobile ? undefined : panelHost} className={mobile ? link + ' w-full text-left' : link} onNavigate={() => setOpen(false)} />
      <InsideAccessLink className={link} onOpen={() => setOpen(false)}>Только сотрудникам</InsideAccessLink>
      <Link href="/#контакты" className={link} onClick={() => setOpen(false)}>Связаться</Link>
    </>
  }
  return <div ref={root} className={`content-container relative z-20 flex min-w-0 flex-wrap items-center justify-between gap-x-4 ${hero ? 'pt-7 sm:pt-9 lg:!pt-3 lg:!w-full lg:!px-[clamp(4.375rem,4.7vw,4.5rem)]' : 'min-h-[76px] py-4 sm:min-h-[88px]'}`}>
    <Link href="/" className="flex min-h-10 w-[208px] shrink-0 items-center sm:min-h-11 sm:w-[288px]" aria-label="ВИР-ТРАНС, главная"><BrandLogo animated={hero && pathname === '/'} /></Link>
    <nav className="hidden shrink-0 items-center gap-5 whitespace-nowrap rounded-[var(--radius-sm)] bg-[rgba(247,245,241,0.78)] px-3 py-3 text-sm font-medium text-[#282825] backdrop-blur-[10px] xl:flex" aria-label="Основная навигация">{items(false)}</nav>
    <button ref={toggle} type="button" className="relative z-30 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 bg-white/60 text-xl xl:hidden" aria-label={open ? 'Закрыть навигацию' : 'Открыть навигацию'} aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen(!open)}><span aria-hidden="true">{open ? '×' : '☰'}</span></button>
    <div ref={panelHost} className="hidden basis-full xl:block" />
    {open && <nav id="mobile-navigation" className="relative z-30 mt-3 flex w-full flex-col rounded-[var(--radius-md)] border border-black/10 bg-brand-background p-3 text-sm font-semibold text-brand-primary shadow-lg xl:hidden" aria-label="Мобильная навигация">{items(true)}</nav>}
  </div>
}
