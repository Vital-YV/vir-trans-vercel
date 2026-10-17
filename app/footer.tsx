'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import CurrentTopic from './CurrentTopic'
import FooterInsideAccess from './FooterInsideAccess'

export default function Footer() {
  const pathname = usePathname()

  if (pathname === '/top-secret' || pathname === '/top-secret/digest') return null

  return (
    <footer className="bg-brand-graphite text-[var(--color-background)]">
      <div className="content-container py-8 sm:py-9">
        <div className="flex flex-col gap-7 border-b border-white/15 pb-7 md:flex-row md:items-start md:justify-between md:gap-10">
          <div>
            <Link href="/" aria-label="ВИР-ТРАНС, главная" className="block w-[232px] max-w-full rounded-[var(--radius-sm)] bg-brand-background px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent">
              <Image src="/brand/vir-trans-logo-cropped.png" alt="" width={2139} height={471} sizes="208px" className="block h-auto w-full" />
            </Link>
            <p className="mt-2 max-w-sm text-[0.9375rem] leading-6 text-[var(--color-text-secondary-on-graphite)] sm:text-sm sm:leading-relaxed">
              Автомобильные перевозки и экспедирование по России.
            </p>
            <FooterInsideAccess />
          </div>

          <div className="grid gap-7 text-[0.9375rem] leading-6 sm:grid-cols-3 sm:gap-10 sm:text-sm sm:leading-normal">
            <div className="flex flex-col gap-2 sm:gap-1.5">
              <p className="text-xs font-extrabold tracking-[0.12em] text-[var(--color-text-secondary-on-graphite)]">КОНТАКТЫ</p>
              <a href="tel:+78004440097" className="text-base font-semibold leading-6 text-white transition-colors hover:text-brand-accent sm:text-sm sm:leading-normal">+7 (800) 444-00-97</a>
              <a href="mailto:v-t@vir-trans.ru" className="text-base font-semibold leading-6 text-white transition-colors hover:text-brand-accent sm:text-sm sm:leading-normal">v-t@vir-trans.ru</a>
              <a href="https://ati.su/firms/865279/info" target="_blank" rel="noreferrer" className="w-fit border-b border-brand-accent pb-1 transition-colors hover:text-brand-accent">Профиль ATI.SU ↗</a>
            </div>

            <nav className="flex flex-col gap-2 sm:gap-1.5" aria-label="Навигация в footer">
              <p className="text-xs font-extrabold tracking-[0.12em] text-[var(--color-text-secondary-on-graphite)]">НАВИГАЦИЯ</p>
              <Link href="/#vir-trans" className="transition-colors hover:text-brand-accent">Главная</Link>
              <Link href="/#контакты" className="transition-colors hover:text-brand-accent">Контакты</Link>
              <a href="/service" className="transition-colors hover:text-brand-accent">Услуги</a>
              <CurrentTopic placement="above" className="transition-colors hover:text-brand-accent" />
            </nav>

            <nav className="flex flex-col gap-2 sm:gap-1.5" aria-label="Дополнительная навигация">
              <p className="text-xs font-extrabold tracking-[0.12em] text-[var(--color-text-secondary-on-graphite)]">ПАРТНЁРАМ</p>
              <a href="/forClients" className="transition-colors hover:text-brand-accent">Клиентам</a>
              <a href="/vacancy" className="transition-colors hover:text-brand-accent">Вакансии</a>
              <Link href="/privacy" className="transition-colors hover:text-brand-accent">Политика обработки персональных данных</Link>
            </nav>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 pt-4">
          <p className="min-w-0 text-sm leading-5 text-[var(--color-text-secondary-on-graphite)] sm:text-xs sm:leading-normal">© {new Date().getFullYear()} ВИР-ТРАНС <span className="ml-2">Серьёзность сайта — 93%, <Link href="/top-secret" className="text-brand-accent transition-colors hover:text-white hover:underline hover:decoration-brand-accent/70 hover:underline-offset-2">7%-Top secret</Link></span></p>
          <div id="back-to-top-slot" className="h-[52px] w-[52px] shrink-0" />
        </div>
      </div>
    </footer>
  )
}
