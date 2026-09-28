'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { InsideAccessLink } from './InsideAccess'
import FooterInsideAccess from './FooterInsideAccess'

export default function Footer() {
  const pathname = usePathname()

  if (pathname === '/top-secret' || pathname === '/top-secret/digest') return null

  return (
    <footer className="bg-brand-graphite text-[var(--color-background)]">
      <div className="content-container py-8 sm:py-9">
        <div className="flex flex-col gap-7 border-b border-white/15 pb-7 md:flex-row md:items-start md:justify-between md:gap-10">
          <div>
            <p className="text-2xl font-extrabold tracking-[-0.06em] text-white">ВИР-ТРАНС</p>
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
              <InsideAccessLink className="transition-colors hover:text-brand-accent">Не входить, только для персонала</InsideAccessLink>
            </nav>

            <nav className="flex flex-col gap-2 sm:gap-1.5" aria-label="Дополнительная навигация">
              <p className="text-xs font-extrabold tracking-[0.12em] text-[var(--color-text-secondary-on-graphite)]">ПАРТНЁРАМ</p>
              <a href="/forClients" className="transition-colors hover:text-brand-accent">Клиентам</a>
              <a href="/vacancy" className="transition-colors hover:text-brand-accent">Вакансии</a>
            </nav>
          </div>
        </div>

        <p className="pt-4 text-sm leading-5 text-[var(--color-text-secondary-on-graphite)] sm:text-xs sm:leading-normal">© {new Date().getFullYear()} ВИР-ТРАНС <span className="ml-2">Серьёзность сайта — 93%, <Link href="/top-secret" className="text-brand-accent transition-colors hover:text-white hover:underline hover:decoration-brand-accent/70 hover:underline-offset-2">7%-Top secret</Link></span></p>
      </div>
    </footer>
  )
}
