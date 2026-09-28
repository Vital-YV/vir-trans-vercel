'use client'

import { useState } from 'react'
import Image from 'next/image'
import { InsideAccessLink } from './InsideAccess'
import EtrnStamp from './EtrnStamp'
import styles from './Hero.module.css'

const navigation = [
  { label: 'Перевозки', href: '#перевозки' },
  { label: 'Опыт', href: '#опыт' },
  { label: 'О компании', href: '#о-компании' },
  { label: 'Контакты', href: '#контакты' },
  { label: 'Не входить, только для персонала', href: '/inside', subtle: true },
]

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openRequestForm = () => {
    document.querySelector<HTMLButtonElement>('#delivery-request button')?.click()
  }

  return (
    <section id="vir-trans" className="relative overflow-hidden bg-brand-background">
      <div className="relative overflow-hidden lg:flex lg:h-[calc(100svh-132px)] lg:min-h-0 lg:flex-col">
        <div className="absolute inset-0 bg-[linear-gradient(112deg,#f7f5f1_0%,#f7f5f1_42%,#746d66_62%,#2a2a28_78%,#1d1d1c_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-[linear-gradient(0deg,rgba(241,236,229,0.82),rgba(241,236,229,0))]" />

        <div className="content-container relative z-20 flex items-center justify-between pt-7 sm:pt-9 lg:!w-full lg:!px-[clamp(4.375rem,4.7vw,4.5rem)]">
          <a href="#vir-trans" className="text-[1.5rem] font-extrabold tracking-[-0.06em] sm:text-[2rem]" aria-label="ВИР-ТРАНС">
            ВИР-ТРАНС
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-white xl:flex xl:-translate-x-[clamp(3rem,5vw,5rem)]" aria-label="Основная навигация">
            {navigation.map((item) => (
              item.subtle
                ? <InsideAccessLink key={item.href} className="text-white/70 transition-colors hover:text-brand-accent">{item.label}</InsideAccessLink>
                : <a key={item.href} href={item.href} className="transition-colors hover:text-brand-accent">{item.label}</a>
            ))}
          </nav>

          <button
            type="button"
            className="relative z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white/60 text-xl xl:hidden"
            aria-label={isMenuOpen ? 'Закрыть навигацию' : 'Открыть навигацию'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{isMenuOpen ? '×' : '☰'}</span>
          </button>

          {isMenuOpen && (
            <nav className="absolute right-[var(--content-padding)] top-[4.75rem] z-30 flex w-64 flex-col rounded-[var(--radius-md)] border border-black/10 bg-white p-3 text-sm font-semibold shadow-xl xl:hidden" aria-label="Основная навигация">
            {navigation.map((item) => (
                item.subtle
                  ? <InsideAccessLink key={item.href} className="w-full rounded px-3 py-2 text-brand-primary/70 hover:bg-black/5" onOpen={() => setIsMenuOpen(false)}>{item.label}</InsideAccessLink>
                  : <a key={item.href} href={item.href} className="rounded px-3 py-2 hover:bg-black/5" onClick={() => setIsMenuOpen(false)}>{item.label}</a>
              ))}
            </nav>
          )}
        </div>

        <div className="content-container relative z-10 flex items-center pb-10 pt-16 sm:pt-20 lg:min-h-0 lg:flex-1 lg:!w-full lg:!px-[clamp(4.375rem,4.7vw,4.5rem)] lg:pb-24">
          <div className="relative z-20 max-w-[43rem] lg:max-w-[44rem] xl:max-w-[54rem]">
            <h1 className="max-w-[12ch] text-[clamp(3rem,5.4vw,5.8rem)] font-extrabold leading-[0.92] tracking-[-0.065em] text-brand-primary lg:max-w-none lg:whitespace-nowrap">
              Ваш груз —<br />в центре внимания
            </h1>
            <p className="mt-7 max-w-[36rem] text-lg leading-[1.45] text-brand-primary sm:text-xl lg:mt-9 lg:text-[1.45rem]">
              Организуем автомобильные перевозки по России — от регулярных загрузок до задач с особыми условиями.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-5 lg:mt-10">
              <a href="#контакты" className="inline-flex min-h-14 items-center justify-center rounded-[var(--radius-sm)] bg-brand-accent px-7 text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent-orange-hover)] sm:px-8 sm:text-lg">
                Обсудить задачу
              </a>
              <button type="button" onClick={openRequestForm} className="inline-flex min-h-14 items-center justify-center rounded-[var(--radius-sm)] border border-brand-primary bg-brand-background px-7 text-base font-semibold text-brand-primary transition-colors hover:bg-white/70 sm:px-8 sm:text-lg lg:bg-white/30">
                Запросить стоимость
              </button>
            </div>
          </div>
        </div>

        <div className="pointer-events-none relative z-10 flex h-[clamp(14.375rem,64vw,17.5rem)] w-full items-center justify-center bg-[radial-gradient(ellipse_at_50%_78%,rgba(240,193,111,0.34),rgba(68,65,61,0.18)_46%,transparent_72%)] lg:absolute lg:inset-y-0 lg:right-0 lg:z-10 lg:mt-0 lg:flex lg:h-auto lg:w-[min(68vw,1100px)] lg:items-end lg:justify-end lg:bg-none">
          <div className="relative h-full max-w-full aspect-[4/3] lg:h-[92%]">
            <Image
              src="/hero/lamp-only.png"
              alt="Лампа освещает деревянный ящик с грузом"
              width={1448}
              height={1086}
              priority
              className="absolute inset-0 h-full w-full"
            />
            <Image
              src="/hero/crate-clean.png"
              alt=""
              aria-hidden="true"
              width={1254}
              height={1254}
              priority
              className={`${styles.crate} absolute left-[31.1%] top-[34%] w-[41.8%] max-w-none`}
            />
            <Image
              src="/hero/fragile-flask.png"
              alt=""
              aria-hidden="true"
              width={1536}
              height={1024}
              priority
              className={styles.flask}
            />
          </div>
        </div>
      </div>

      <EtrnStamp actionHref="/etrn" />
    </section>
  )
}
